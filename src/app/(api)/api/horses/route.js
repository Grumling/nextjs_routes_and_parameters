import { fetchHorses, fetchProducts } from "@/lib/data.service";
import { NextResponse } from "next/server";

export async function GET(request) {

    
    let horses = await fetchHorses()

    return NextResponse.json(horses)


}