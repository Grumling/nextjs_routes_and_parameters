import { headers } from 'next/headers';

const ServerComponent = ({pageParams, pageSearchParams = {}}) => {

    const headersList = headers();
    const nextUrl = headersList.get('next-url') || "";

    // headersList.forEach((value, key) => {
    //     console.log(key, value);
    // });

    return <div className="serverComponent">

        <h2>Server Component</h2>   
        <p>Path: {nextUrl}</p>
        <p>Params: {JSON.stringify(pageParams)}</p>
        <p>Search Params: {JSON.stringify(pageSearchParams)}</p>

    </div>

};

export default ServerComponent