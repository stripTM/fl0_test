const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./free-port.js')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
  res.end(`Hola mundo, recibiendo petición de ${req.url}`)
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
