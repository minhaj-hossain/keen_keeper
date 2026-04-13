import React from 'react';

const Badge = ({ tag }) => {


    return (
        <>
            <div className='bg-[#cbfadb]  w-fit p-2 rounded-full uppercase font-medium text-[12px] text-[#244d3f] text-center'>
                {tag}
            </div>
        </>
    );
};

export default Badge;