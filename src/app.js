import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import districtRoutes from './routes/district.routes'
import institutionRoutes from './routes/institution.routes'
import procedureRoutes from './routes/procedure.routes'

import { FRONTEND_URL } from './config'

const app = express()

app.use(cors({
  credentials: true, origin: FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/district', districtRoutes)
app.use('/api/institution', institutionRoutes)
app.use('/api/procedure', procedureRoutes)
