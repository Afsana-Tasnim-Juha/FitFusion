import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div>
            <div className="max-w-8xl mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>



        </div>
    );
};

export default Main;