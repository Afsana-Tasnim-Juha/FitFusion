import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";

const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;