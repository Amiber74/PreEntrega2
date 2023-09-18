import express from "express"
import StudentModel from '../models/EstModel.js'

const router = express.Router()

router.get('/', async (req, res)=>{
    const{limit, page, query, sort}= req.params
})


export default router