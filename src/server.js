import { createServer } from 'node:http'

const port = 3000

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World!\n')
})

server.listen(port, 'localhost', () => {
  console.log(`Listening on localhost:${port}`)
})
