// navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="flex flex-row space-x-6 border-b-2 w-full border-gray-200">

                <Link href="/">
                    Home
                </Link>

                <Link href="/dashboard">
                    Dashboard
                </Link>


                <Link href="/about">
                    About
                </Link>

                <Link href="/contact">
                    Settings
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;