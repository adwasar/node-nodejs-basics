import fs from 'node:fs'
import path from 'node:path'

const create = async () => {
  const filePath = path.join('./src/fs/files/fresh.txt')
  const msg = 'I am fresh and young'

  if (fs.existsSync(filePath)) {
    throw new Error('FS operation failed')
  }
  
  fs.writeFile('./src/fs/files/fresh.txt', msg, (err) => {
    if (err) {
      console.error('FS operation failed')
    } else {
      console.log('File created successfully')
    }
  })
}

await create()
