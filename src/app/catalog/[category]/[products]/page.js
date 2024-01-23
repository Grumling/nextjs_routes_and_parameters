import ClientComponent from '@/components/clientComponent/clientComponent';
import ServerComponent from '@/components/serverComponent/serverComponent';
import { fetchProducts } from '@/lib/data.service';

const Page = async ({params, searchParams}) => {

    // const p = await fetchProducts();
    // console.log(p);

    return <div className="page">
        
        <h1>CATALOG CATEGORY PRODUCT</h1>
        <h2> 
            [{params.products}] from category [{params.category}]
        </h2>
        <ClientComponent></ClientComponent>
        <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </div>

};

export default Page