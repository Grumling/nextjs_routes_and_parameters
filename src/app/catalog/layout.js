import ClientComponent from "@/components/clientComponent/clientComponent";
import ServerComponent from "@/components/serverComponent/serverComponent";

export default function CatalogLayout({ children }) {

    return <div className={"local-layout"}>
        
        Local Catalog Layout
        {children}

        <ClientComponent></ClientComponent>
        <ServerComponent></ServerComponent>
    </div>
}