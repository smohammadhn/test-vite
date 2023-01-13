import fs from 'vite-plugin-fs/browser'

export async function asyncReadFile(filename) {
  try {
    const contents = fs.readFile(filename, 'utf-8')
    const arr = await contents.then(function (result) {
      return result.toString().split('\r\n')
    })

    // console.log(arr); // ['One', 'Two', 'Three', 'Four']

    return arr
  } catch (err) {
    console.log(err)
  }
}

// asyncReadFile("./sorted.txt");
