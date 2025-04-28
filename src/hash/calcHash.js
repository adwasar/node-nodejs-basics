import fs from 'fs'
import path from 'path'
import { createHash } from 'crypto'

const calculateHash = async () => {
  const pathToFile = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt')
  const hash = createHash('sha256')
  const stream = fs.createReadStream(pathToFile)

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => hash.update(chunk))
    stream.on('end', () => {
      const hexHash = hash.digest('hex')
      console.log(hexHash)
      resolve(hexHash)
    })
    stream.on('error', reject)
  })
}

await calculateHash()
