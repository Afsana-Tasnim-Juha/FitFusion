import f4 from '../assets/f4.jpg'
import f2 from '../assets/f2.jpg'
import f1 from '../assets/f1.jpg'
import f5 from '../assets/f5.jpg'

const Features = () => {
    return (
        <div >
            <div>
                <div >
                    <h2 className="text-3xl text-center  text-[#9873FF] font-bold mt-20 ">Features</h2>
                    <p className="text-center text-l mt-4 mb-4">Get personalized workouts, track progress, and stay motivated with our fitness app.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-6">
                    <div className='flex gap-2'>

                        <img className='w-[200px]' src={f1} alt="" />
                        <div>
                            <h1 className='font-bold text-[#9873FF]'>Dynamic Workout Programs</h1>
                            <p className='text-sm'>Explore a variety of dynamic workout programs suitable for all fitness levels.</p>
                            <button className="btn btn-outline btn-primary mt-1">More Details</button>
                        </div>
                    </div>
                    <div className='flex gap-2'>

                        <img className='w-[200px]' src={f2} alt="" />
                        <div>
                            <h1 className='font-bold text-[#9873FF]'>Interactive Challenges</h1>
                            <p className='text-sm'>Participate in fun and engaging fitness challenges to spice up your routine.</p>
                            <button className="btn btn-outline btn-primary mt-1">More Details</button>
                        </div>
                    </div>
                    <div className='flex gap-2'>

                        <img className='w-[200px]' src={f4} alt="" />
                        <div>
                            <h1 className='font-bold text-[#9873FF]'>Wellness Resources</h1>
                            <p className='text-sm'>Access a treasure trove of wellness resources including articles, videos, and podcasts.</p>
                            <button className="btn btn-outline btn-primary mt-1">More Details</button>
                        </div>
                    </div>
                    <div className='flex gap-2'>

                        <img className='w-[200px]' src={f5} alt="" />
                        <div>
                            <h1 className='font-bold text-[#9873FF]' >Virtual Fitness Events</h1>
                            <p className='text-sm'>Access a treasure trove of wellness resources including articles, videos, and podcasts.</p>
                            <button className="btn btn-outline btn-primary mt-1">More Details</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Features;