"use client"

import { friendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

            <div className=' flex justify-center items-center'>
                <ResponsiveContainer width="100%" height={320} aspect={1}>
                    <PieChart margin={{ bottom: 40 }}>
                        <Pie
                            data={data}
                            innerRadius={90}
                            outerRadius={120}
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius={8}
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />

                        <Tooltip />

                        <Legend />

                    </PieChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default PieChartContent;