import { NextResponse } from "next/server";
// import { fetchProducts } from "../../../../lib/data.service";

export async function GET(request) {

    
    // let serviceProducts = await fetchProducts();
    // console.log('Service Products', serviceProducts);   


    let products = [
        {
            "title" : "Product A",
        },
        {
            "title" : "Product B",
        }
    ]   


    return NextResponse.json(products)


}