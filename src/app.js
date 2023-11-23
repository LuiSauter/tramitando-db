import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
// import userRoutes from './routes/user.routes.js'
// import neighborhoodRoutes from './routes/neighborhood.routes.js'
// import districtRoutes from './routes/district.routes'
// import institutionRoutes from './routes/institution.routes'
// import procedureRoutes from './routes/procedure.routes'

import { FRONTEND_URL } from './config.js'

const app = express()

app.use(cors({
  credentials: true, origin: FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
// app.use('/api/district', neighborhosodRoutes)
// app.use('/api/district', districtRoutes)
// app.use('/api/institution', institutionRoutes)
// app.use('/api/procedure', procedureRoutes)

export default app
