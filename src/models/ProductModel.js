import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productCollection ='Products'

const productSchema = new mongoose.Schema ({
    id: {
        type:Number,
        required:true,
    },
    tittle: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    code: {
        type:Number,
        required:true,
    },
    price: {
        type:Number,
        required:true,
        index:true
    },
    status: {
        type:Boolean,
        required:true,
        index:true
    },
    stock: {
        type:Number,
        required:true,
    },
    thumbnails: {
        type:Array,
    }
})

productSchema.plugin(mongoosePaginate)
const productModel = mongoose.model(productCollection, productSchema)

export default productModel