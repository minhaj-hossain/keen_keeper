'use client'

import { friendContext } from '@/context/FriendContext';
import React, { useContext, useState } from 'react';

const Filter = () => {

    const { timeline, setTimeline, filter, setFilter } = useContext(friendContext)

    const handleFilter = (value) => {

        setFilter(value)
        
    }

    return (
        <>

            <select
                onChange={(e) => handleFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 w-[30%]"
            >
                <option value="">Filter timeline</option>
                <option value="text">Text</option>
                <option value="call">Call</option>
                <option value="video">Video</option>
            </select>

        </>
    );
};

export default Filter;