import path from 'node:path'
import { app, BrowserWindow } from 'electron'
import getPort from 'get-port'
import logger from 'electron-log'

// see: https://github.com/electron/electron/issues/21457#issuecomment-1404327157
let nuxtServer = path
  .join(__dirname, '../../server/index.mjs')
  .replace(`.asar${path.sep}`, `.asar.unpacked${path.sep}`)

// fix: ES Module loading with absolute path fails on windows
// see: https://github.com/nodejs/node/issues/31710
if (process.platform === 'win32') {
  nuxtServer = path.join('file://', nuxtServer)
}

export async function createWindow() {
  const win = new BrowserWindow({
    title: 'Nuxtron',
  })

  if (!app.isPackaged) {
    // open devtools
    // win.webContents.openDevTools()
    await win.loadURL('http://localhost:3000')
  } else {
    const host = 'localhost'
    // Get a port, default 4200
    const port = await getPort({ port: 4200 })
    // Set env for nuxt server
    process.env.NITRO_HOST = host
    process.env.NITRO_PORT = port + ''
    try {
      // Run nuxt server
      await import(nuxtServer)
      logger.info(`Server is running on ${host}:${port}`)
    } catch (error) {
      logger.error(error)
      process.exit(1)
    }
    // Load nuxt server
    await win.loadURL(`http://${host}:${port}`)
  }
  return win
}
