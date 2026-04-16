"use client"

import { friendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const PieChartContent = () => {

    const { timeline, setTimeline, filter, setFilter } = useContext(friendContext)

    const textData = timeline.filter(data => data.medium == 'text')
    const callData = timeline.filter(data => data.medium == 'call')
    const videoData = timeline.filter(data => data.medium == 'video')


    const data = [
        { name: 'Text', value: textData.length, fill: '#173F35' },
        { name: 'Call', value: callData.length, fill: '#5B3DF5' },
        { name: 'Video', value: videoData.length, fill: '#2FA36B' },
    ];


    return (
        <div className='bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] p-8 rounded-lg' >
            <h4 className='font-medium text-xl text-[#244d3f]'>By Interaction Type</h4>

            <div className='borders flex justify-center items-center'>
                <PieChart style={{ width: '30%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        verticalAlign="bottom" height={60}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius={8}
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />

                    <Tooltip />

                    <Legend />
                </PieChart>

            </div>

        </div>
    );
};

export default PieChartContent;