import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
            <div className="text-center max-w-xl">
                <h1 className="text-[120px] font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 animate-pulse">
                    404
                </h1>

                <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

                <p className="text-slate-400 mt-4">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                <div className="mt-10 flex gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-medium shadow-lg shadow-cyan-500/30"
                    >
                        Go Home
                    </Link>

                    
                </div>
            </div>
        </div>
    );
};

export default NotFound;