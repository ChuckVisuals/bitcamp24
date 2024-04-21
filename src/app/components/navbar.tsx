// navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-4 bg-black bg-opacity-50 backdrop-blur">
            <div className="flex flex-row space-x-8 border-b-2 border-gray-200 items-center justify-center pt-6">

                <Link className="font-bold text-2xl pb-6" href="/">
                    Home
                </Link>

                <Link className="font-bold text-2xl pb-6" href="/dashboard">
                    Dashboard
                </Link>


                <Link className="font-bold text-2xl pb-6" href="/about">
                    About
                </Link>

                <Link className="font-bold text-2xl pb-6" href="/contact">
                    Settings
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;