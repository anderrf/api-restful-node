import { env } from './env'
import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server is started!')
  })
