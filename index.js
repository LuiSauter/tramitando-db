import app from './src/app.js'
import { PORT } from './src/config.js'
import './src/database.js'

const LISTEN_PORT = process.env.NODE_ENV === 'development' ? 4000 : PORT

app.listen(LISTEN_PORT, () => {
  console.log(`Server running on http://localhost:${LISTEN_PORT}`)
})
