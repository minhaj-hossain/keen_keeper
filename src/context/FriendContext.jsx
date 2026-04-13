"use client"

import React, { createContext } from 'react';

export const friendContext = createContext();

const friendProvider = ({ children }) => {

    const data = {
        name: "Minhaj"
    }

    return <friendContext.Provider value={data}>
        {children}
    </friendContext.Provider>
};

export default friendProvider;