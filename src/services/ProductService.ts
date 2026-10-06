import { ServiceBase } from "./ServiceBase";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string[];
  thumbnail: string;
}

export class ProductService extends ServiceBase{

    static async getProducts() {
        let url = this.getURL("/products")
        let response = await fetch(url)
        let data = await response.json()
        return data.products
    }

    static async getProductById(id:number) {
        let url = this.getURL(`/products/${id}`)
        let response = await fetch(url)
        let data = await response.json()
        return data
    }
   
}