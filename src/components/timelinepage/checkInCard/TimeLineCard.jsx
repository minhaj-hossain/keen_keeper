import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const TimeLineCard = ({ data }) => {

    const { id, name, medium, date } = data;


    return (

        <div className="flex flex-row items-start sm:items-center gap-3 sm:gap-4 bg-white border border-gray-200 rounded-lg px-4 py-4 sm:px-5 shadow-sm">
            <div className="text-2xl">
                {medium == 'text' ? (<MdOutlineTextsms className='text-3xl' />) : ''}
                {medium == 'call' ? (<FiPhoneCall className='text-3xl' />) : ''}
                {medium == 'video' ? (<IoVideocamOutline className='text-3xl' />) : ''}

            </div>
            <div className='min-w-0 flex-1'>
                <p className="text-gray-800 font-medium">
                    <span className='capitalize'>{medium}</span> <span className="text-gray-500 font-normal">with {name}</span>
                </p>
                <p className="text-sm text-gray-400">{date}</p>
            </div>
        </div>

    );
};

export default TimeLineCard;