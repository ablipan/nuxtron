/* eslint-disable no-template-curly-in-string */
/**
* @type {import('electron-builder').Configuration}
* @see https://www.electron.build/configuration/configuration
*/
module.exports = {
  appId: 'com.example.nuxtron',
  productName: 'Nuxtron',
  asar: true,
  asarUnpack: [
    '.output/**',
    'node_modules/**',
  ],
  directories: {
    output: 'release/${version}',
  },
  files: [
    '.output/**/*',
  ],
  includeSubNodeModules: true,
}
