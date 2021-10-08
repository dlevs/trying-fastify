import type { FastifyInstance } from 'fastify'
import { Static, Type } from '@sinclair/typebox'

const Querystring = Type.Object({ name: Type.String() })
const ResponseBody = Type.Object({
  hello: Type.String(),
})

export const registerHelloRoute = (app: FastifyInstance, url: string) => {
  // Declare a route
  app.route<{
    Querystring: Static<typeof Querystring>
    Reply: Static<typeof ResponseBody>
  }>({
    url,
    method: 'GET',
    schema: {
      querystring: Querystring,
      response: { 200: ResponseBody },
    },
    async handler(request) {
      return { hello: `${request.query.name}!` }
    },
  })
}
