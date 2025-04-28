import fs from 'fs'
import zlib from 'zlib'
import path from 'path'

const compress = async () => {
  const inputFilePath = path.join('src', 'zip', 'files', 'fileToCompress.txt')
  const outputFilePath = path.join('src', 'zip', 'files', 'archive.gz')

  const readStream = fs.createReadStream(inputFilePath)
  const gzipStream = zlib.createGzip()
  const writeStream = fs.createWriteStream(outputFilePath)

  readStream.pipe(gzipStream).pipe(writeStream)
}

await compress()
