import app from './app.js'
import { PORT } from './config.js'
import './database.js'

const LISTEN_PORT = process.env.NODE_ENV === 'development' ? 4000 : PORT

app.listen(LISTEN_PORT, () => {
  console.log(`Server running on http://localhost:${LISTEN_PORT}`)
})
