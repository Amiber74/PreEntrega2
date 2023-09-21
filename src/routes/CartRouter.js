import { Router } from "express";

import { CartService } from "../services/CartService.js";

const ServiceCart = new CartService()
const router = Router()

router.get('/',async (req, res)=>{
    const Result = await ServiceCart.GetAllCarts()
    res.send(Result)
})

router.get('/:cid', async (req, res)=>{
    const {cid} = req.params
    const result = await ServiceCart.getOneCart(cid)
    res.send(result)
})

router.post('/', async (req, res) => {
    const Result = await ServiceCart.NewCart()
    res.send(Result)
})

router.put('/:cid/product/:pid', async (req, res)=>{
    const {cid, pid} = req.params
    const Quantity = 1
    const result = await ServiceCart.AgregateProduct(cid, pid, Quantity)
    res.send(result)
})  

router.delete('/:cid/product/:pid', async (req, res)=>{
    const {cid, pid} = req.params

    const Result = await ServiceCart.RemoveProduct(cid,pid)
    res.send(Result)
})

router.put('/:cid/product/:pid', async (req, res )=> {
    const {cid, pid} = req.params
    const prod = req.body

    const Result = await ServiceCart.UpdateProduct(cid, pid, prod.Quantity)
    
    res.send(Result)
})

export default router