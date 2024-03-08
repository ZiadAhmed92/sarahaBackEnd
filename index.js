import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import router from './src/modules/users/user.router.js'
import cors from 'cors'
import routerMessage from './src/modules/messages/message.router.js'
import * as dotenv from "dotenv"
import { AppError } from './src/utils/appError.js'
import { globalError } from './src/utils/globalError.js'
import multer from'multer'
import { v4 as uuidv4 } from 'uuid';
dotenv.config()
const app = express()
const port = process.env.PORT
dbConnection()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(routerMessage)
const storage = multer.diskStorage({
  destination:  (req, file, cb)=> {
    cb(null, 'uploads/')
  },
  filename:  (req, file, cb)=> {
  
    cb(null, uuidv4() + '-' + file.originalname  )
  }
})
const upload = multer({ storage: storage })

app.use(upload.single("path"))






app.use('*', (req, res, next) => {
  next(new AppError("Invalid url -cant access this endPoint " + req.originalUrl, 404))
})
app.use(globalError)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))