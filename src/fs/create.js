import fs from 'fs/promises'
import path from 'path'

const create = async () => {
  const pathToFile = path.join('src', 'fs', 'files', 'fresh.txt')
  const text = "I am fresh and young"

  try {
    await fs.access(pathToFile)
    throw new Error("FS operation failed")
  } catch (error) {
    if (error.code === 'ENOENT') {
      fs.writeFile(pathToFile, text)
    } else {
      throw error
    }
  }
}

await create()