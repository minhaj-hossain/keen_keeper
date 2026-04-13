import Card from '@/components/ui/friendDataCard/Card';
import Image from 'next/image';
import React from 'react';


const YourFriend = async () => {

    const res = await fetch('http://localhost:3000/friendData.json')
    const data = await res.json();

    return (
        <div className='container px-4 sm:px-0 mx-auto my-10 space-y-4'>
            <h3 className='font-semibold text-2xl'>Your Friend</h3>

            {/* card container  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>

                {/* card */}

                {
                    data.map(friend => <Card key={friend.id} friend={friend} />)
                }

            </div>
        </div>
    );
};

export default YourFriend;