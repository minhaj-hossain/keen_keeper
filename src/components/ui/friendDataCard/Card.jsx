import Image from 'next/image';
import React from 'react';
import Badge from './Badge';
import Link from 'next/link';

const Card = ({ friend }) => {

    const { next_due_date, goal, bio, tags, status, days_since_contact, email, picture, name, id } = friend;

    return (
        <div>
            <Link href={`/friendDetails/${id}`}
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
                    <p className='text-[12px] text-[#64748b] text-center'>{days_since_contact}d ago</p>

                    <div className='space-y-2 flex flex-col justify-center items-center'>
                        <div className='flex flex-wrap gap-2'>

                            {
                                tags.map((tag, index) => <Badge key={index} tag={tag} />)
                            }
                        </div>
                        <div className={` 
                            ${status == 'almost due' && 'bg-[#efad44]'} 
                            ${status == 'overdue' && 'bg-[#ef4444]'} 
                            ${status == 'on-track' && 'bg-[#244d3f]'} 
                            p-2 rounded-full capitalize font-medium text-[12px] text-center text-white`}>
                            {status}
                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Card;