import { app, BrowserWindow } from 'electron'
import { createWindow } from './createWindow'

let win: BrowserWindow | null = null

app.whenReady().then(async () => {
  win = await createWindow()
})

app.on('window-all-closed', () => {
  win = null
  app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', async () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else if (!win) {
    win = await createWindow()
  }
})
