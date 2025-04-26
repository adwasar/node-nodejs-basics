import fs from 'fs/promises'
import path from 'path'

const copy = async () => {
  const pathToFolder = path.join('src', 'fs', 'files')
  const pathToCopiedFolder = path.join('src', 'fs', 'files_copy')

  try {
    const sourceStats = await fs.stat(pathToFolder)

    if (!sourceStats.isDirectory()) {
      throw new Error('FS operation failed')
    }

    try {
      await fs.access(pathToCopiedFolder)
      throw new Error('FS operation failed')
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
    }

    await fs.mkdir(pathToCopiedFolder)

    const files = await fs.readdir(pathToFolder)

    for (const file of files) {
      const sourcePath = path.join(pathToFolder, file)
      const targetPath = path.join(pathToCopiedFolder, file)
      const stats = await fs.stat(sourcePath)

      if (stats.isDirectory()) {
        await copyDirectory(sourcePath, targetPath)
      } else {
        await fs.copyFile(sourcePath, targetPath)
      }
    }
  } catch (err) {
    throw err
  }
}

async function copyDirectory(source, target) {
  await fs.mkdir(target)

  const files = await fs.readdir(source)

  for (const file of files) {
    const sourcePath = path.join(source, file)
    const targetPath = path.join(target, file)
    const stats = await fs.stat(sourcePath)

    if (stats.isDirectory()) {
      await copyDirectory(sourcePath, targetPath)
    } else {
      await fs.copyFile(sourcePath, targetPath)
    }
  }
}

await copy()
