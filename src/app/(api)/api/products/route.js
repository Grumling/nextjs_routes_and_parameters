import { fetchProducts } from "@/lib/data.service";
import { NextResponse } from "next/server";

export async function GET(request) {

    
    let products = await fetchProducts()
    return NextResponse.json(products)


}