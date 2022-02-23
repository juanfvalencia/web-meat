import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
  return (
        <div className="mainContainer">
            <Header/>
            <Navbar/>
                <main>{children}</main>
            <footer>
                <Footer/>
            </footer>
        </div>
  )
}

export default Layout