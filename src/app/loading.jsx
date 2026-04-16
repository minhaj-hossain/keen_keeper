import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='grid h-screen place-items-center z-40'>
            <HashLoader color='#244d3f' />
        </div>
    );
};

export default loading;