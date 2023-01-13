import fs from 'vite-plugin-fs/browser'

export async function asyncReadFile(filename) {
  const contents = fs.readFile(filename, 'utf-8')
  return await contents.then((text) => text.toString().split('\n'))
}
