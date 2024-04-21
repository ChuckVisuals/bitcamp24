// navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full flex justify-center items-center z-4 bg-black bg-opacity-50 backdrop-blur border-b-2 border-gray-200 ">
            <div className="flex flex-row space-x-60 rounded items-center justify-center pt-6">

                <Link className="font-bold text-xl pb-1 border-b-2 border-transparent hover:border-current transition-all duration-500 -translate-y-2" href="/">
                    Home
                </Link>

                <Link className="font-bold text-xl pb-1 border-b-2 border-transparent hover:border-current transition-all duration-500 -translate-y-2" href="/dashboard">
                    Dashboard
                </Link>


                <Link className="font-bold text-xl pb-1 border-b-2 border-transparent hover:border-current transition-all duration-500 -translate-y-2" href="/about">
                    About
                </Link>

                <Link className="font-bold text-xl pb-1 border-b-2 border-transparent hover:border-current transition-all duration-500 -translate-y-2 my-2" href="/contact">
                    Settings
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;