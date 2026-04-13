import Image from 'next/image';
import React from 'react';

const YourFriend = () => {
    return (
        <div className='container px-4 sm:px-0 mx-auto my-10 space-y-4'>
            <h3 className='font-semibold text-2xl'>Your Friend</h3>

            {/* card container  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>

                {/* card */}

                <div className='p-6 flex flex-col justify-center items-center space-y-3 bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-lg'>
                    {/* image */}
                    <div>
                        <Image src='https://i.ibb.co.com/PBkQBDG/email.webp' alt='image' width={80} height={80} />
                    </div>

                    {/* text content */}
                    <div className='space-y-2'>
                        <h3 className='font-semibold text-xl'>David Kim</h3>
                        <p className='text-[12px] text-[#64748b] text-center'>62d ago</p>

                        <div className='space-y-2 flex flex-col justify-center items-center'>
                            <div className='bg-[#cbfadb]  w-fit p-2 rounded-full uppercase font-medium text-[12px] text-[#244d3f] text-center'>
                                work
                            </div>
                            <div className='bg-[#efad44] p-2 rounded-full capitalize font-medium text-[12px] text-center'>
                                Almost Due
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourFriend;