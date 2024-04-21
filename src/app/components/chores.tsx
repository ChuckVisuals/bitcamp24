// chores.tsx
import React from 'react';
import Link from 'next/link';
import { group } from 'console';

const chore = {
    group_name: "balls",
    due_date: "2024-04-20 23:30",
    name: "Your Chore Name",
    description: "pastt day",
    poster: "Your Chore Poster",
    fulfiller: "Your Chore Fulfiller",
};


const Chores: React.FC<typeof chore> = ({ group_name, due_date, name, description, poster, fulfiller }) => {
    return (
        <div className="h-[400px] w-[400px] bg-gray-900 rounded-3xl drop-shadow-md flex flex-col justify-between p-8 border border-cyan-600 no-underline active:duration-75 active:translate-y-0.5 active:translate-x-0.5 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0rem_0rem_#2596be] active:shadow-none transition-all cursor-pointer">

            <div className="self-center">
                {name}
            </div>
            <div className="self-center">
                {description}
            </div>
            <div className="self-end">
                Due: {due_date}
            </div>


        </div>
    );
};

export default Chores;