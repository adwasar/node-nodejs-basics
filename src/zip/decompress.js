import fs from 'fs'
import zlib from 'zlib'
import path from 'path'

const decompress = async () => {
  const inputFilePath = path.join('src', 'zip', 'files', 'archive.gz')
  const outputFilePath = path.join('src', 'zip', 'files', 'fileToCompress.txt')

  const readStream = fs.createReadStream(inputFilePath)
  const gunzipStream = zlib.createGunzip()
  const writeStream = fs.createWriteStream(outputFilePath)

  readStream.pipe(gunzipStream).pipe(writeStream)
}

await decompress()
