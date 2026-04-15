import CheckInCard from '@/components/timelinepage/checkInCard/CheckInCard';
import Filter from '@/components/timelinepage/filter/Filter';
import React from 'react';

const TimeLinePage = () => {
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Timeline</h1>

                    <div className="mb-6">
                        <Filter />            
                    </div>

                    <CheckInCard />

                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;