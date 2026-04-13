
import React from 'react';

const Footer = () => {


    return (
        <div className='bg-[#244d3f] pt-20 pb-8'>

            <div className='container mx-auto px-4 sm:px-0 text-white space-y-10'>

                <div className='text-center space-y-6'>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-7xl'><span className='font-black'>Keen</span>keeper</h1>

                        <p className='opacity-80 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-medium text-[20px]'>Social Links</h3>

                        {/* Social link icons will be added soon */}
                        <div>

                        </div>
                    </div>
                </div>


                <div className='border-t border-[#1a8862]/50 opacity-50 text-[#fafafa] pt-4 flex justify-between items-center text-center sm:text-left flex-col sm:flex-row gap-2'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className='flex gap-3'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Footer;