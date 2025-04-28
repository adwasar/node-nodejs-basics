import { Transform } from 'stream'

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split('').reverse().join('')
      this.push(reversed)
      callback()
    },
  })

  process.stdin.pipe(reverseStream).pipe(process.stdout)
}

await transform()