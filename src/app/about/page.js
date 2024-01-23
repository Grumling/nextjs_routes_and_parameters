import ClientComponent from "@/components/clientComponent/clientComponent";
import ServerComponent from "@/components/serverComponent/serverComponent";

const Page = ({params, searchParams}) => {


    return <div className="page">
        
        <h1>ABOUT PAGE</h1>
        <ClientComponent></ClientComponent>
        <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </div>

};

export default Page