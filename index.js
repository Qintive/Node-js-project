import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {

    if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'mail.html'), (err, data) => {
            if (err) {
                throw err
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        })
    }
})

const PORT = process.env.PORT || 3000
server.listen(3000, () => {
    console.log(`Server has been on ${PORT}...`)
})