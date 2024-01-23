import ClientComponent from "@/components/clientComponent/clientComponent";
import ServerComponent from "@/components/serverComponent/serverComponent";
import { fetchProducts, fetchHorses, fetchHorsesByTitle } from "@/lib/data.service";

const Page = async ({params, searchParams}) => {

    const products = await fetchProducts()
    const horses = await fetchHorses();
    const horse = await fetchHorsesByTitle('Aldabaran');

    console.log('products', products);
    console.log('horses', horses);
    console.log('horse', horse);

    
    return <div className="page">
        
        <h1>ABOUT PAGE</h1>
        <ClientComponent></ClientComponent>
        <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </div>

};

export default Page