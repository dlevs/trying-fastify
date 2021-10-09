import Fastify from 'fastify'
import { helloRoute } from './routes/hello'

const fastify = Fastify({ logger: true })

fastify.register(helloRoute)

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
