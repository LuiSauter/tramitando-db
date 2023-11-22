import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PROT || 4000
export const MONGODB_URI = process.env.MONGODB_URI
export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret'

export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'
