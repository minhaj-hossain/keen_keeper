"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = () => {

    const pathname = usePathname()


    return (
        <>
            <Link className={`py-3 px-4 rounded-sm ${pathname == '/' ? 'font-semibold bg-[#244d3f] text-[#ffffff] ' : 'font-bold text-[#64748b]'}`} href={'/'}>Home</Link>

            <Link className={` py-3 px-4 rounded-sm ${pathname == '/timeline' ? 'font-semibold bg-[#244d3f] text-[#ffffff] ' : 'font-bold text-[#64748b]'}`} href={'/timeline'}>Timeline</Link>

            <Link className={` py-3 px-4 rounded-sm ${pathname == '/stats' ? 'font-semibold bg-[#244d3f] text-[#ffffff] ' : 'font-bold text-[#64748b]'}`} href={'/stats'}>Stats</Link>

        </>
    );
};

export default Navlinks;