import { IProduct, ProductService } from "@/src/services/ProductService"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request : NextRequest ,
    {params} : {params : Promise<{id:string}>
}
){
    const {id } = await params;
    let {title , thumbnail , description} = await ProductService.getProductById(parseInt(id))
    let productWithUseFullValue ={
        title,
        
        thumbnail,
    }

    console.log(productWithUseFullValue)
    return NextResponse.json({
       "message" : "hi"
    })
}

export async function POST(request: NextRequest){
    const product  = request.json()
}