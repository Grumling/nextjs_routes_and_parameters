import ClientComponent from "@/components/clientComponent/clientComponent";
import ServerComponent from "@/components/serverComponent/serverComponent";
import Link from "next/link";

const Page = ({params, searchParams}) => {


    return <div className="page">
        
        <h1>CATALOG</h1>

        <Link href="/catalog/category-a/">Category A</Link> <Link href="/catalog/category-b/">Category B</Link>
        <ClientComponent></ClientComponent>
        <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </div>

};

export default Page