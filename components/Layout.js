import Nav from "./Nav"
import Footer from "./Footer"
const Layout = ({children}) => {
  return (
    <div className="flex flex-col justify-between h-screen">
        <Nav />
        <main className="container 2xl:container xl:container lg:container md:container mx-auto px-4 py-10">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout