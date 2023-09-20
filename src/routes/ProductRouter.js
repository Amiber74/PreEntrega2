import express from "express"
import ProductModel from '../models/ProductModel.js'

const router = express.Router()


router.get('/', async (req, res)=>{

    const{limit=10, page=1, sort={}}= req.query
    
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: sort
    }
    

    let Result = await ProductModel.paginate({},options)

    const ResultMod = {
        status: 'success',
        payload: Result.docs,
        totalPages:Result.totalPages,
        prevPage:Result.prevPage,
        nextPage:Result.nextPage,
        hasPrevPage: Result.hasPrevPage,
        hasnextPage: Result.hasNextPage,
        prevLink:Result.prevLink = Result.hasPrevPage?`http://localhost:8080/studentes?page=${Result.prevPage}`:null,
        nextLink:Result.hasNextPage?`http://localhost:8080/?page=${Result.nextPage}`:null,
    }   
    res.send(ResultMod)
})


export default router