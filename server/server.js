
import express from 'express'
import dotenv from 'dotenv';
import dbConnect from './config/dbconnect.js';
import initRoutes from './routes/index.js';

dotenv.config();


const app = express()
const port = process.env.PORT || 6666
app.use(express.json())                // epress hiểu server nhận dữ liệu từ client dưới dạng json
app.use(express.urlencoded({ extended: true })) // express hiểu server nhận dữ liệu từ client dưới dạng form

dbConnect()
initRoutes(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
