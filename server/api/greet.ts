import { version } from 'node:process'
// Do not support name import now
import electron from 'electron'
import pkg from '../../package.json'
import { isElectron } from '~~/utils/isElectron'

const { app } = electron

function getElectronVersion() {
  if (isElectron()) {
    return process.versions.electron
  }
  return 'unknown'
}

function getNodeVersion() {
  if (isElectron()) {
    return process.versions.node
  }
  return version
}

function getVersion() {
  if (isElectron()) {
    return app.getVersion()
  }
  return pkg.version
}

export default defineEventHandler(async () => {
  const list = []
  list.push(`Date: ${Date.now()}`)
  list.push(`Node version: ${getNodeVersion()}`)
  list.push(`Electron version: ${getElectronVersion()}`)
  list.push(`App version: ${getVersion()}`)
  return list.join('\n')
})
