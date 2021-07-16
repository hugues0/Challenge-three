import express from 'express'
import cors from 'cors'
import path from 'path'
import route from './server/routes/albumRoute.js'

const app = express()
app.use(cors())
app.use('/api/v1', route)

const port = 3000;
app.listen(port,() => console.log(`App listening on port ${port}`));
