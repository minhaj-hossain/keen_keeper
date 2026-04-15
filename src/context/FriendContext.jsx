"use client"

import React, { createContext, useState } from 'react';

export const friendContext = createContext();

const FriendProvider = ({ children }) => {

    const [friendData, setFriendData] = useState()
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState('')

    const data = {
        friendData, setFriendData, timeline, setTimeline, filter, setFilter
    }

    return <friendContext.Provider value={data}>
        {children}
    </friendContext.Provider>
};

export default FriendProvider;