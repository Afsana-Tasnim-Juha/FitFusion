import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const Programs = () => {
    return (
        <div>
            <h1 className="text-center justify-center pt-20">Programs page</h1>
            <div className="flex">
                <IoMdArrowRoundBack className="mt-1" />
                <p><Link to="/">Back to the home page</Link></p>
            </div>

        </div>
    );
};

export default Programs;