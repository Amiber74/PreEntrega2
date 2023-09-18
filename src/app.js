import express from 'express'
import mongoose from 'mongoose'
import __dirname from './utils/dirnameUtils.js'
import handlebars from 'express-handlebars'
import ProductRouter from './routes/ProductRouter.js'

const uri = 'mongodb+srv://rojasfacundo2002:rojasfacundo2002@cluster0.esne0dt.mongodb.net/PreEntrega2?retryWrites=true&w=majority'
mongoose.connect(uri)


const app = express()

//MiDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

//Handlebars 
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine','handlebars')

//Routers

app.use('/',ProductRouter)

