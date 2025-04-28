import fs from 'fs'
import path from 'path'

const write = async () => {
  const pathToFile = path.join('src', 'streams', 'files', 'fileToWrite.txt')
  const writableStream = fs.createWriteStream(pathToFile)

  process.stdin.pipe(writableStream)
}

await write()
