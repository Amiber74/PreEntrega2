import { ObjectId } from 'bson'
import CartModel from '../models/CartModel.js'
import {ProductService} from '../services/ProductService.js'

const ServiceProd = new ProductService()

class  CartService {

    async NewId (){
        
        let result = Math.floor(Math.random() * 1000)

        try{    
            return result
        }catch(e){
            console.error(e.message)
        }
    }

    async NewCart (){

        const Cart = {
            id: await this.NewId(),
            products: []
        }

        try{
            const result = CartModel.create(Cart)
            return result
        } catch (e){
            console.error(e.message)
        }
    }

    async GetAllCarts (){
        try{    
            const result = await CartModel.find({})
            return result

        } catch( e){
            console.error(e.message)
            return []
        }
    }

    async getOneCart(Cid) {
        const Id = String(Cid);
    
        try {
            const result = await CartModel.findOne({ id: Id }); 
    
            return result
    } catch (e) {
            console.error(e.message);
            return null; // Manejar errores
        }
    }
    

    async AgregateProduct(Cid, pid, Quantity) {
        const Cart = await this.getOneCart(Cid);
        const Product = await ServiceProd.getOneProduct(pid);
    
        const ObjProd = {
            Product: Product,
            Quantity: Quantity
        };
        
        Cart.products.push(ObjProd)
        
        try {
            const result = await CartModel.updateOne({ id: Cid }, Cart)
            return result;
        } catch (e) {
            console.error(e.message);
        }
    }
    


    async UpdateProduct (Cid, pid, Quantity){

        try  {
            const Cart = await this.getOneCart(Cid)
            
            const Products = Cart.products

            Products.forEach(prod => {
                if (prod.IdProduct == pid ){
                    prod.Quantity = Quantity
                }
            });
            
            return Products
        } catch (e){
            console.error(e.message)
        }
    }

    async RemoveProduct (Cid, pid){
        try  {
            const Cart = await this.getOneCart(Cid)
            
            const Products = Cart.products
            
            const NewProducts = Products.filter(prod => prod.IdProduct != pid)

            Cart.products = NewProducts

            return Cart
        } catch (e){
            console.error(e.message)
        }
    }

}

export {CartService}