import fs from 'fs/promises'
import path from 'path'

const list = async () => {
  const pathToFolder = path.join('src', 'fs', 'files')

  try {
    const files = await fs.readdir(pathToFolder)
    console.log(files)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await list()
