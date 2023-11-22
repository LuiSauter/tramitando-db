import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

const connectionString = MONGODB_URI

if (connectionString === '') {
  throw new Error(
    'Please define the MONGO_URI environment variable inside in .env'
  )
}

export default async function connectDb() {
  await mongoose.connect(connectionString)
}
mongoose.connection.once('open', () => {
  console.log('Database mongoDB connection stablished')
})

mongoose.connection.on('error', (error) => {
  console.error(error)
  process.exit(0)
})

connectDb().catch(console.error)
