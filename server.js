import jsonServer from 'json-server'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = jsonServer.create()
const jsonFilePath = join(__dirname, 'public/fake_api_json/companies-lookup.json')

// Read and transform the JSON data
const rawData = JSON.parse(fs.readFileSync(jsonFilePath))
const jsonData = { companies: Array.isArray(rawData) ? rawData : [] }

// Create router with transformed data
const router = jsonServer.router(jsonData)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001')
})
