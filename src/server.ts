import { fastify } from 'fastify'
import { registerHelloRoute } from './routes/hello'

const app = fastify({ logger: true })

registerHelloRoute(app, '/')
registerHelloRoute(app, '/hello')

// Run the server!
const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
