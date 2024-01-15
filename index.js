import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import router from './src/modules/users/user.router.js'
import cors from 'cors'
import routerMessage from './src/modules/messages/message.router.js'
import * as dotenv from "dotenv"
dotenv.config()
const app = express()
const port = process.env.PORT
dbConnection()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(routerMessage)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))