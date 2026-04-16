"use client"

import { friendContext } from '@/context/FriendContext';
import React, { useContext, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const CheckIn = ({ expectedData }) => {

    const { timeline, setTimeline } = useContext(friendContext)

    const handleTimeline = (medium) => {
        const newData = {
            id: Date.now(),
            name: expectedData.name,
            medium,
            date: new Date().toLocaleDateString(),
        };

        setTimeline((prev) => [...prev, newData]);

        toast.success(`${medium} with ${expectedData.name} added in the timeline`, {
            position: "top-center"
        });
    };


    // console.log(timeline)
    return (
        <>
            <div
                onClick={() => handleTimeline('call')}
                className='bg-[#f8fafc] border border-[#e9e9e9] rounded-lg p-4 flex flex-col items-center cursor-pointer'>
                <FiPhoneCall className='text-2xl mb-2' />
                <h4 className='text-[18px] text-[#1f2937]'>Call</h4>
            </div>

            <div
                onClick={() => handleTimeline('text')}
                className='bg-[#f8fafc] border border-[#e9e9e9] rounded-lg p-4 flex flex-col items-center cursor-pointer'>
                <MdOutlineTextsms className='text-2xl mb-2' />
                <h4 className='text-[18px] text-[#1f2937]'>Text</h4>
            </div>

            <div
                onClick={() => handleTimeline('video')}
                className='bg-[#f8fafc] border border-[#e9e9e9] rounded-lg p-4 flex flex-col items-center cursor-pointer'>
                <IoVideocamOutline className='text-2xl mb-2' />
                <h4 className='text-[18px] text-[#1f2937]'>Video</h4>
            </div>
        </>
    );
};

export default CheckIn;