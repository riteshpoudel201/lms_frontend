import { Outlet } from "react-router-dom"
import Footer from "../common/Footer"
import Header from "../common/Header"

const DefaultLayout = () => {
  return (
    <div>
        <Header />
        <main className="main">
           <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default DefaultLayout