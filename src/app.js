import express from 'express'
// import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import descriptionTramitRoutes from './routes/descriptionTramit.routes.js'
import tramitRoutes from './routes/tramit.routes.js'

// import { FRONTEND_URL } from './config.js'

const app = express()

// app.use(cors({
//   credentials: true, origin: FRONTEND_URL
// }))

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/descriptionTramit', descriptionTramitRoutes)
app.use('/api/tramit', tramitRoutes)

export default app
