const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 ">
            <div className='flex flex-col  md:flex-row mt-12 gap-4 mb-8'>
                <div className='w-full md:w-1/2 bg-[#9873FF] rounded-lg p-4'>
                    <h1 className="font-bold text-white text-center text-3xl pt-8 pb-4">About us</h1>
                    <p className="text-white pb-4">FitFusion is your ultimate fitness companion, offering accessible, effective, and enjoyable workouts for all. Our mission is to empower individuals to take control of their health and well-being through personalized, science-backed fitness solutions.</p>
                    <p className="text-white ">Our team of passionate fitness professionals brings years of experience and expertise to every workout. From certified personal trainers to yoga instructors and nutrition experts, we're dedicated to guiding and supporting you on your fitness journey.</p>
                </div>
                <div className='w-full md:w-1/2 bg-[#9873FF] rounded-lg p-4'>
                    <form className="card-body">
                        <h1 className="text-3xl font-bold text-center text-white mb-4">Membership</h1>
                        <div className="form-control">

                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">

                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div>
                            <textarea className="textarea textarea-primary w-full" placeholder="Details"></textarea>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
