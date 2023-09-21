import mongoose from "mongoose";

const CartCollection = 'carts'

const CartSchema = mongoose.Schema({
    id:{
        type:String,
        required: true,
        Index:true
    },
    products:Array
})

const CartModel = mongoose.model(CartCollection, CartSchema)

export default CartModel