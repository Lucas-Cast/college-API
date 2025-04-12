import type { Knex } from 'knex'
import { settings } from './settings'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: settings.host,
      port: settings.dbPort,
      database: settings.database,
      user: settings.user,
      password: settings.password,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  }
}

export default config