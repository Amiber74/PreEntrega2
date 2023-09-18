import ProductModel from '../models/ProductModel.js'


class ProductService {

    async getAllProducts(){
        try{
            const products = await ProductModel.find()
            return products
        } catch (e){
            console.error(e.message)
            return []
        }
    }

    async CreateProduct (prod){

        const {id, tittle, description, code, price, status, stock, thumbnails} = prod

        if (!id || !tittle || !description || !code || !price || !status || !stock){
            return 'ERROR: Campos Incompletos'
        }

        const NewProduct ={
            id,
            tittle,
            description,
            code,
            price,
            status,
            stock,
            thumbnails: thumbnails ?? []
        }
        
        try {
            const result = await ProductModel.create(NewProduct)
            return result

        } catch(e){
            console.error("Error al crear Producto: "+ e.message);
        }
    
    }

    async DeleteProduct (uid){

        try{
            const result = await ProductModel.deleteone({_id:uid})
            return result

        } catch (e){
            console.error("Error al eliminar Producto: "+ e.message);
        }
    }

    async UpdateProduct (uid, product){

        const {id, tittle, description, code, price, status, stock, thumbnails} = product

        if (!id || !tittle || !description || !code || !price || !status || !stock){
            return 'ERROR: Campos Incompletos'
        }

        try{
            const result = await ProductModel.updateOne({_id:uid},product)
            return result
        } catch(e){
            console.error(e.message);
        }

    }

}

export default ProductService