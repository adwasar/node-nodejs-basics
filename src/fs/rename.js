import fs from 'fs/promises'
import path from 'path'

const rename = async () => {
  const pathToFile = path.join('src', 'fs', 'files', 'wrongFilename.txt')
  const newPathToFile = path.join('src', 'fs', 'files', 'properFilename.md')

  try {
    await fs.access(pathToFile)

    try {
      await fs.access(newPathToFile)
      throw new Error('FS operation failed')
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw new Error('FS operation failed')
      }
    }

    await fs.rename(pathToFile, newPathToFile)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await rename()
