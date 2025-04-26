import fs from 'fs/promises'
import path from 'path'

const remove = async () => {
  const pathToFile = path.join('src', 'fs', 'files', 'fileToRemove.txt')

  try {
    await fs.access(pathToFile)
    await fs.unlink(pathToFile)
  } catch (error) {
    throw new Error('FS operation failed');
  }
}

await remove()
