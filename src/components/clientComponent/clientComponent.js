'use client';
import { useParams, useSearchParams, usePathname  } from 'next/navigation'

const ClientComponent = () => {

    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();

    const renderSearchParams = () => {
      // Display the keys
        for (const entry of searchParams.entries()) {
            return `${entry[0]}: ${entry[1]}`
        }
    }

    return <div className="clientComponent">

        <h2>Client Component</h2>
        <p>Path: {pathname}</p>
        <p>Params: {JSON.stringify(params)}</p>
        <p>Search Params: {renderSearchParams()}</p>
        
        

    </div>

};

export default ClientComponent