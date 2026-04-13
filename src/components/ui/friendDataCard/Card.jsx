import Image from 'next/image';
import React from 'react';
import Badge from './Badge';

const Card = ({ friend }) => {

    const { next_due_date, goal, bio, tags, status, days_since_contact, email, picture, name, id } = friend;

    return (
        <div>
            <div className='p-6 flex flex-col justify-center items-center space-y-3 bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-lg'>
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
                        <div className='bg-[#efad44] p-2 rounded-full capitalize font-medium text-[12px] text-center'>
                            {status}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;