import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductSection from "../components/productSection";

const Index = () =>{

    return(
        <div className="mainContainer">
            <Header/>
            <Navbar/>
            <main>
                <section></section>
                <ProductSection/>
                <section></section>
                </main>
            <footer><Footer/></footer>    
        </div>
    )
}
export default Index;