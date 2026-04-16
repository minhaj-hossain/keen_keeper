import PieChartContent from '@/components/stats/PieChartContent';
import React from 'react';

const StatsPage = () => {
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Friendship Analytics</h1>

                    <div className="mb-6">

                        <PieChartContent />

                    </div>


                </div>
            </div>
        </div>
    );
};

export default StatsPage;