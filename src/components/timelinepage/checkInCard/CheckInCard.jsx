"use client"


import { friendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import TimeLineCard from './TimeLineCard';

const CheckInCard = () => {

    const { timeline, filter} = useContext(friendContext)

    const newData = (
        filter == '' ? timeline : (
            timeline.filter(data => data.medium == filter)
        )
    )

    return (

        <>

            <div className="space-y-4">
                {/* Item 1 */}

                {
                    newData.map(data => <TimeLineCard key={data.id} data={data} />)
                }

            </div>
        </>
    );
};

export default CheckInCard;