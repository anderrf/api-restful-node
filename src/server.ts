import fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: randomUUID(),
      title: 'Test',
      amount: 1000,
    })
    .returning('*')
  console.log(transaction)
  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')
  return transactions
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is started!')
  })
