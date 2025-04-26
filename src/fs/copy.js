import fs from 'fs/promises'
import path from 'path'

const copy = async () => {
  const sourceFolder = path.join('src', 'fs', 'files')
  const targetFolder = path.join('src', 'fs', 'files_copy')

  try {
    const sourceStats = await fs.stat(sourceFolder)

    if (!sourceStats.isDirectory()) {
      throw new Error('FS operation failed')
    }

    try {
      await fs.access(targetFolder)
      throw new Error('FS operation failed')
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
    }

    await fs.mkdir(targetFolder)

    const files = await fs.readdir(sourceFolder)

    for (const file of files) {
      const sourcePath = path.join(sourceFolder, file)
      const targetPath = path.join(targetFolder, file)
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
