import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='container mx-auto my-10 space-y-10'>

            {/* banner header section  */}
            <div className='text-center flex flex-col justify-center items-center'>

                <h2 className='text-3xl lg:text-5xl font-bold leading-tight tracking-tighter mb-4'>Friends to keep close in your life</h2>
                <p className='max-w-125 mb-8 text-[#64748b]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>

                <button className="font-semibold bg-[#244d3f] text-[#ffffff] py-3 px-4 rounded-sm flex items-center gap-1 "><FaPlus /> Add A Friend</button>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                    <h4 className='font-semibold text-3xl text-[#244d3f]'>4</h4>
                    <p className='text-[#64748b] text-[18px]'>Total Friends</p>
                </div>

                <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                    <h4 className='font-semibold text-3xl text-[#244d3f]'>3</h4>
                    <p className='text-[#64748b] text-[18px]'>On Track</p>
                </div>

                <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                    <h4 className='font-semibold text-3xl text-[#244d3f]'>6</h4>
                    <p className='text-[#64748b] text-[18px]'>Need Attention</p>
                </div>
                <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                    <h4 className='font-semibold text-3xl text-[#244d3f]'>12</h4>
                    <p className='text-[#64748b] text-[18px]'>Interactions This Month</p>
                </div>
            </div>

            <div className="divider"></div>
        </div>
    );
};

export default Banner;