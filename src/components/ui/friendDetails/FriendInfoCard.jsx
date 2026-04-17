import Image from 'next/image';
import React from 'react';
import Badge from '../friendDataCard/Badge';

const FriendInfoCard = ({ expectedData }) => {

    const { bio, tags, status, email, picture, name, id } = expectedData;


    return (
        <div>
            <div href={`/friendDetails/${id}`}
                className='p-6 flex flex-col justify-center items-center space-y-3 bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-lg group relative transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 hover:ring-1 hover:ring-gray-200'>
                {/* image */}
                <div>
                    <Image
                        src={picture}
                        alt='image'
                        width={80}
                        height={80}
                        className='rounded-full' />
                </div>

                {/* text content */}
                <div className='space-y-2'>
                    <h3 className='font-semibold text-center text-xl'>{name}</h3>
                    <div className='flex justify-center'>

                        <div className={` 
                            ${status == 'almost due' && 'bg-[#efad44]'} 
                            ${status == 'overdue' && 'bg-[#ef4444]'} 
                            ${status == 'on-track' && 'bg-[#244d3f]'} 
                            p-2 rounded-full capitalize font-medium text-[12px] text-center text-white w-fit`}>
                            {status}

                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center space-y-2'>
                        <div className='flex flex-wrap justify-center gap-2 w-full'>

                            {
                                tags.map((tag, index) => <Badge key={index} tag={tag} />)
                            }
                        </div>

                    </div>
                    <div className=' flex flex-col items-center justify-center space-y-2'>
                        <div className='max-w-[80%] line-clamp-1 font-medium text-[#64748b] italic text-center'>
                            {bio}
                        </div>
                        <p className='text-[14px] text-[#64748b]'>Preferred: {email}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendInfoCard;