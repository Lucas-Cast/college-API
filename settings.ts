import dotenv from 'dotenv'
dotenv.config()

export const settings = {
  serverPort: Number(process.env.SERVER_PORT || ''),
  host: process.env.DB_HOST || '',
  dbPort: Number(process.env.DB_PORT || ''),
  database: process.env.DB_NAME || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
}
