import banner2 from '../assets/banner2.jpg';

const Banner = () => {
    return (
        <div >
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='text-center md:text-left md:w-1/2'>
                    <h1 className="text-[#1A1919] font-bold text-5xl md:text-5xl w-full md:w-[500px]">
                        One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream</span>
                    </h1>
                    <p className="text-[#757575] font-normal my-6">
                        Welcome to FitFusion, where fitness meets fun! We believe that staying active should be enjoyable, and we're here to make your fitness journey exciting and rewarding. Whether you're a beginner or a fitness enthusiast, join us as we embark on this adventure together.
                    </p>
                    <button className="btn bg-[#9873FF] text-[#FFF]">Get Started</button>
                </div>
                <div className="md:w-1/2">
                    <img className='w-full h-auto md:h-[500px]' src={banner2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
