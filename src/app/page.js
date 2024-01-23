import ClientComponent from "@/components/clientComponent/clientComponent"
import ServerComponent from "@/components/serverComponent/serverComponent"

const Page = async ({params, searchParams}) => {

  return (
    <main className="page" >
      HOME
      <ClientComponent></ClientComponent>
      <ServerComponent pageParams={params} pageSearchParams={searchParams}></ServerComponent>
    </main>
  )
}

export default Page

