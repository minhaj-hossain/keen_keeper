import CheckIn from '@/components/ui/friendDetails/CheckIn';
import FriendInfoCard from '@/components/ui/friendDetails/FriendInfoCard';
import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuArchive } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendDetailsPage = async ({ params }) => {

    const { friendId } = await params;

    const res = await fetch('http://localhost:3000/friendData.json')
    const data = await res.json();

    const expectedData = data.find(particular => particular.id == friendId)

    return (
        <div className='max-w-7xl px-4 md:px-10 2xl:px-0 mx-auto my-8 md:my-20'>
            <div>
                {/* top details  */}
                <div className='grid grid-cols-1 md:grid-cols-10 gap-4 '>

                    <div className='md:col-span-4 row-span-2 '>
                        <FriendInfoCard expectedData={expectedData} />
                    </div>

                    <div className=' md:col-span-2'><div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 group relative transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                        <h4 className='font-semibold text-3xl text-[#244d3f]'>3</h4>
                        <p className='line-clamp-1 text-[#64748b] text-[18px]'>Days Since Contact</p>
                    </div></div>
                    <div className=' md:col-span-2'>
                        <div
                            className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 group relative    transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                            <h4 className='font-semibold text-3xl text-[#244d3f]'>5</h4>
                            <p className='text-[#64748b] text-[18px] line-clamp-1'>Goal (Days)</p>
                        </div>
                    </div>
                    <div className=' md:col-span-2'>
                        <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 group relative   transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                            <h4 className='font-semibold text-3xl text-[#244d3f]'>5</h4>
                            <p className='text-[#64748b] text-[18px]'>Next Due</p>
                        </div>
                    </div>

                    <div className='md:col-span-6'>
                        <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 flex-1 group relative transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>

                            <div className='flex  justify-between items-start sm:items-center gap-3'>
                                <h3 className='font-medium text-xl text-[#244d3f]'>Relationship Goal</h3>
                                <button className='bg-[#f8fafc] btn btn-ghost  border border-[#e9e9e9]'>Edit</button>
                            </div>

                            <p className='text-[18px] text-[#64748b] text-left '>Connect every <span className='font-bold text-black'>30 days</span></p>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-10 gap-4 mt-6'>

                    <div className='md:col-span-4 flex flex-col gap-3'>
                        <div
                            className='bg-white px-5 py-3.5 rounded-xl shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] flex  justify-center  items-center gap-3 font-medium text-[#1f2937] group relative border border-gray-200  p-6  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                            <RiNotificationSnoozeLine className="text-xl  shrink-0" />
                            <p>Snooze 2 weeks</p>
                        </div>

                        <div
                            className='bg-white px-5 py-3.5 rounded-xl shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]  flex justify-center items-center gap-3 font-medium text-[#1f2937] 
                            group relative  p-6  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                            <LuArchive className="text-xl  shrink-0" />
                            <p>Archive</p>
                        </div>

                        <div
                            className='bg-white px-5 py-3.5 rounded-xl shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]  flex justify-center items-center gap-3 font-medium text-[#ef4444] group relative  p-6  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                            <RiDeleteBin6Line className="text-xl flex shrink-0" />
                            <p>Delete</p>
                        </div>
                    </div>


                    <div className='md:col-span-6  '>

                        <div className=' bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-4 flex-1'>

                            <h3 className='text-[#244d3f] font-medium text-xl'>
                                Quick Check-In
                            </h3>

                            <div className='grid grid-cols-3 gap-4 '>
                                <CheckIn expectedData={expectedData} />

                            </div>
                        </div>


                    </div>

                    {/* empty */}
                    {/* <div className='col-span-4'></div> */}

                    <div className='md:col-span-6 md:col-start-5'>
                        <div className=' bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-4 flex-1'>

                            <div className='flex justify-between flex-col sm:flex-row  gap-3'>
                                <h3 className='font-medium text-xl text-[#244d3f]'>Recent Interactions</h3>
                                <button className='bg-[#f8fafc] btn btn-ghost  border border-[#e9e9e9]'><FaHistory />Full History</button>
                            </div>

                            <div className=''>

                                <div className='border-b border-[#e9e9e9] flex justify-between items-center py-3 group relative  p-6  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>

                                    <div className='flex items-center gap-4'>
                                        {/* image */}
                                        <FiPhoneCall className='text-3xl' />

                                        <div>
                                            <h4 className='text-[18px] text-[#1f2937]'>Meetup</h4>
                                            <p className='text-[#64748b]'>Industry conference meetup</p>
                                        </div>

                                    </div>
                                    <p className='text-[14px] text-[#64748b]'>Jan 28, 2026</p>

                                </div>
                                <div className='border-b border-[#e9e9e9] flex justify-between items-center py-3 group relative  p-6  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>

                                    <div className='flex items-center gap-4'>
                                        {/* image */}
                                        <MdOutlineTextsms className='text-3xl' />

                                        <div>
                                            <h4 className='text-[18px] text-[#1f2937]'>Text</h4>
                                            <p className='text-[#64748b]'>Asked for career advice</p>
                                        </div>

                                    </div>
                                    <p className='text-[14px] text-[#64748b]'>Jan 28, 2026</p>

                                </div>
                                <div className='border-b border-[#e9e9e9] flex justify-between items-center py-3 group relative  p-6  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>


                                    <div className='flex items-center gap-4'>
                                        {/* image */}
                                        <IoVideocamOutline className='text-3xl' />

                                        <div>
                                            <h4 className='text-[18px] text-[#1f2937]'>Video</h4>
                                            <p className='text-[#64748b]'>Asked for career advice</p>
                                        </div>

                                    </div>
                                    <p className='text-[14px] text-[#64748b]'>Jan 28, 2026</p>

                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default FriendDetailsPage;