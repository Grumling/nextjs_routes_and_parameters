import ClientComponent from "@/components/clientComponent/clientComponent";
import ServerComponent from "@/components/serverComponent/serverComponent";
import Link from "next/link";

const Page = ({params, searchParams}) => {

    console.log('searchParams', searchParams.post)

    return <div className="page">
        
        <h1>BLOGPOSTS PAGE</h1>
        <Link href="/blogposts?post=1">Post 1</Link> <Link href="/blogposts?post=2">Post 2</Link>

        <h2>Post {searchParams.post}</h2>
        
        <ClientComponent></ClientComponent>
        <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </div>

};

export default Page