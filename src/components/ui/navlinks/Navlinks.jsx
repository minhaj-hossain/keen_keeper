"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';

const Navlinks = () => {

    const pathname = usePathname()


    return (
        <>
            <Link className={` py-3 px-4 rounded-sm flex items-center gap-1 ${pathname == '/' ? 'font-semibold bg-[#244d3f] text-[#ffffff] ' : 'font-bold text-[#64748b]'}`} href={'/'}> <RiHome2Line size={20} /> Home</Link>

            <Link className={` py-3 px-4 rounded-sm flex items-center gap-1 ${pathname == '/timeline' ? 'font-semibold bg-[#244d3f] text-[#ffffff] ' : 'font-bold text-[#64748b]'}`} href={'/timeline'}><RiTimeLine size={20} />Timeline</Link>

            <Link className={` py-3 px-4 rounded-sm flex items-center gap-1 ${pathname == '/stats' ? 'font-semibold bg-[#244d3f] text-[#ffffff] ' : 'font-bold text-[#64748b]'}`} href={'/stats'}><ImStatsDots size={20} />Stats</Link>

        </>
    );
};

export default Navlinks;