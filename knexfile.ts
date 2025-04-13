import { knex } from 'knex'
import { settings } from './settings'

const config = knex({
  client: 'pg',
  connection: {
    host: settings.host,
    port: settings.dbPort,
    database: settings.database,
    user: settings.user,
    password: settings.password,
  },
})

export default config