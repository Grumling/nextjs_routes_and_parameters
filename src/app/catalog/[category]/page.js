import ClientComponent from "@/components/clientComponent/clientComponent";
import ServerComponent from "@/components/serverComponent/serverComponent";
import Link from "next/link";

const Page = ({params, searchParams}) => {

    return <div className="page">
        
        <h1>CATALOG CATEGORY</h1>
        <h2> 
            Category [{params.category}]
        </h2>

        <Link href="/catalog/category-a/product-a">Product A</Link> <Link href="/catalog/category-b/product-b">Product B</Link>

        <ClientComponent></ClientComponent>
        <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </div>

};

export default Page