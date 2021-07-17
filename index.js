import env from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import route from './server/routes/albumRoute.js'

env.config();
const app = express()
app.use(cors())
app.use('/api/v1', route)
app.get('/',(req,res) => {
    res.send('Welcome to challenge three!!!')
})

const port = process.env.PORT || 10000;
app.listen(port,() => console.log(`App listening on port ${port}`));
