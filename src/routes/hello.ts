import type { FastifyPluginCallback } from 'fastify'
import { Type } from '@sinclair/typebox'
import { SchemaRouteType } from '../lib/types'

const schema = {
  querystring: Type.Object({
    name: Type.String(),
  }),
  response: {
    200: Type.Object({
      hello: Type.String(),
    }),
  },
}

const registerHelloRoute: FastifyPluginCallback = async (fastify) => {
  fastify.get<SchemaRouteType<typeof schema>>('/', {
    schema,
    async handler(request) {
      return { hello: `${request.query.name}!` }
    },
  })
}

export default registerHelloRoute
