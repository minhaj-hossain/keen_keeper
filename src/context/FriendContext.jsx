"use client"

import React, { createContext, useState } from 'react';

export const friendContext = createContext();

const FriendProvider = ({ children }) => {

    const [friendData, setFriendData] = useState()



    const data = {
        friendData, setFriendData
    }

    return <friendContext.Provider value={data}>
        {children}
    </friendContext.Provider>
};

export default FriendProvider;