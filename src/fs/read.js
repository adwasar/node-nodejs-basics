import fs from 'fs/promises'
import path from 'path'

const read = async () => {
  const pathToFile = path.join('src', 'fs', 'files', 'fileToRead.txt')

  try {
    const content = await fs.readFile(pathToFile, 'utf-8')
    console.log(content)
  } catch (error) {
    throw new Error("FS operation failed")
  }
}

await read()
