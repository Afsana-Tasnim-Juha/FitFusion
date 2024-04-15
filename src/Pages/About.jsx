import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const About = () => {
    return (
        <div className="text-center justify-center pt-20">
            <h1 >About page</h1>
            <div className="flex">
                <IoMdArrowRoundBack className="mt-1" />
                <p><Link to="/">Back to the home page</Link></p>
            </div>
        </div>
    );
};

export default About;