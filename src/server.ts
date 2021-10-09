import Fastify from 'fastify'
import { helloRoute } from './routes/hello'

// TODO: Turn on pretty print only for local dev
const fastify = Fastify({ logger: { prettyPrint: true } })

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
