import fs from 'fs'
import path from 'path'

const read = async () => {
  const pathToFile = path.join('src', 'streams', 'files', 'fileToRead.txt')
  const stream = fs.createReadStream(pathToFile)

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => process.stdout.write(chunk))
    stream.on('end', resolve)
    stream.on('error', reject)
  })
}

await read()
