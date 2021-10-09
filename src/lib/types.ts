import type { Static, TSchema } from '@sinclair/typebox'

export type SchemaRouteType<
  Schema extends {
    querystring: TSchema
    response: Record<number, TSchema>
  }
> = {
  Querystring: Static<Schema['querystring']>
  Reply: Static<Schema['response'][200]>
}
