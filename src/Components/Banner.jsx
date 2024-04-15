import banner2 from '../assets/banner2.jpg';
import b2 from '../assets/b2.png';

const Banner = () => {
    return (
        <div >
            <div className='flex flex-col-reverse md:flex-row '>
                <div className='text-center md:text-left md:w-1/2'>
                    <h1 className="text-[#1A1919] font-bold text-5xl md:text-5xl w-full md:w-[500px] mt-28">
                        One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream</span>
                    </h1>
                    <p className="text-[#757575] font-normal my-6">
                        Welcome to FitFusion, where fitness meets fun! <br /> We believe that staying active should be enjoyable, and <br /> we're here to make your fitness journey exciting and rewarding. <br /> Whether you're a beginner or a fitness enthusiast, join us as we embark <br /> on this adventure together.
                    </p>
                    <button className="btn bg-[#9873FF] text-[#FFF]">Get Started</button>
                </div>
                <div className="md:w-1/2 mt-28">
                    <img className='w-full h-auto md:h-[500px] rounded-lg relative hover:scale-110 transition duration-300' src={banner2} alt="" />
                    <img
                        className=' w-1/2 md:w-1/4 h-auto md:h-[200px] rounded-lg absolute  right-0  md:right-24   transform -translate-y-1/2 hover:scale-110 transition duration-300'
                        src={b2}
                        alt=""



                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
