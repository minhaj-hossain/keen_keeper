import React from 'react';
import Navlinks from '../ui/navlinks/Navlinks';

const Navbar = () => {


    return (
        <div className='flex justify-between px-4 shadow-sm z-100 2xl:px-20 py-4 items-center'>

            {/* logoLeft */}
            <div className='font-semibold text-[#244d3f] text-2xl'><span className='font-extrabold text-[#1f2937] tracking-tighter'>Keen</span>keeper</div>

            {/* navLinks at right */}

            <div className='hidden sm:flex gap-1 md:4 lg:gap-7' >
                <Navlinks />
            </div>
        </div>
    );
};

export default Navbar;