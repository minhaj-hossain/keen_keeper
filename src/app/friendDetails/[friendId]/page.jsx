import FriendInfoCard from '@/components/ui/friendDetails/FriendInfoCard';
import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';
import { IoVideocam, IoVideocamOutline } from 'react-icons/io5';
import { LuArchive } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendDetailsPage = async ({ params }) => {

    const { friendId } = await params;

    const res = await fetch('http://localhost:3000/friendData.json')
    const data = await res.json();

    const expectedData = data.find(particular => particular.id == friendId)

    const { next_due_date, goal, bio, tags, status, days_since_contact, email, picture, name, id } = expectedData;


    console.log()

    return (
        <div className='max-w-400 px-4 md:px-10 2xl:px-0 mx-auto my-20'>
            <div>
                {/* top details  */}
                <div className='grid grid-cols-10 gap-4 '>

                    <div className='col-span-4 row-span-2 min-w-65'>
                        <FriendInfoCard expectedData={expectedData} />
                    </div>


                    <div className='col-span-2'><div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                        <h4 className='font-semibold text-3xl text-[#244d3f]'>3</h4>
                        <p className='line-clamp-1 text-[#64748b] text-[18px]'>Days Since Contact</p>
                    </div></div>
                    <div className='col-span-2'>
                        <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                            <h4 className='font-semibold text-3xl text-[#244d3f]'>5</h4>
                            <p className='text-[#64748b] text-[18px] line-clamp-1'>Goal (Days)</p>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2'>
                            <h4 className='font-semibold text-3xl text-[#244d3f]'>5</h4>
                            <p className='text-[#64748b] text-[18px]'>Next Due</p>
                        </div>
                    </div>



                    <div className='col-span-6 flex items-center'>
                        <div className='text-center bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 flex-1'>

                            <div className='flex justify-between'>
                                <h3 className='font-medium text-xl text-[#244d3f]'>Relationship Goal</h3>
                                <button className='bg-[#f8fafc] btn btn-ghost  border border-[#e9e9e9]'>Edit</button>
                            </div>

                            <p className='text-[18px] text-[#64748b] text-left '>Connect every <span className='font-bold text-black'>30 days</span></p>
                        </div>
                    </div>


                </div>

                <div className='grid grid-cols-10 gap-4 mt-4'>

                    <div className='col-span-4  flex flex-col gap-3 min-w-65'>
                        <div
                            className='ext-center bg-white p-3 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 flex gap-3 justify-center'> <div className='flex items-center gap-3 font-medium'><RiNotificationSnoozeLine /><p>Snooze 2 weeks</p></div></div>

                        <div
                            className='ext-center bg-white p-3 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 flex gap-3 justify-center'> <div className='flex items-center gap-3 font-medium'><LuArchive /><p>Archive</p></div></div>

                        <div
                            className='ext-center bg-white p-3 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-2 flex gap-3 justify-center'> <div className='flex items-center gap-3 text-[#ef4444] font-medium'><RiDeleteBin6Line /><p>Delete</p></div></div>





                    </div>

                    <div className='col-span-6  '>

                        <div className=' bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-4 flex-1'>

                            <h3 className='text-[#244d3f] font-medium text-xl'>
                                Quick Check-In
                            </h3>

                            <div className='grid grid-cols-3 gap-4'>


                                <div className='bg-[#f8fafc] border border-[#e9e9e9] rounded-lg p-4 flex flex-col items-center'>
                                    <FiPhoneCall className='text-2xl mb-2' />
                                    <h4 className='text-[18px] text-[#1f2937]'>Call</h4>
                                </div>

                                <div className='bg-[#f8fafc] border border-[#e9e9e9] rounded-lg p-4 flex flex-col items-center'>
                                    <MdOutlineTextsms className='text-2xl mb-2' />
                                    <h4 className='text-[18px] text-[#1f2937]'>Text</h4>
                                </div>

                                <div className='bg-[#f8fafc] border border-[#e9e9e9] rounded-lg p-4 flex flex-col items-center'>
                                    <IoVideocamOutline className='text-2xl mb-2' />
                                    <h4 className='text-[18px] text-[#1f2937]'>Video</h4>
                                </div>
                            </div>
                        </div>


                    </div>



                    {/* empty */}
                    <div className='col-span-4'></div>


                    <div className='col-span-6'>
                        <div className=' bg-white p-8 rounded-lg shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] space-y-4 flex-1'>

                            <div className='flex justify-between'>
                                <h3 className='font-medium text-xl text-[#244d3f]'>Recent Interactions</h3>
                                <button className='bg-[#f8fafc] btn btn-ghost  border border-[#e9e9e9]'><FaHistory />Full History</button>
                            </div>

                            <div className=''>


                                <div className='border-b border-[#e9e9e9] flex justify-between items-center py-3'>


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
                                <div className='border-b border-[#e9e9e9] flex justify-between items-center py-3'>


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
                                <div className='border-b border-[#e9e9e9] flex justify-between items-center py-3'>


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
        </div>
    );
};

export default FriendDetailsPage;