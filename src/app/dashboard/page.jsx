"use client";
import 'rsuite/Calendar/styles/index.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import { useEffect, useState } from 'react';
import Chores from '../components/chores';


const chore = {
    group_name: "balls",
    due_date: "2024-04-21 23:30",
    name: "Your Chore Name",
    description: "pastt day",
    poster: "Your Chore Poster",
    fulfiller: "Your Chore Fulfiller",
};

export default function Dashboard() {

    const [data, setData] = useState(null);
    const [input, setInput] = useState('');

    //testing api
    useEffect(() => {
        fetch('https://bitcamp-backend.vercel.app/addchoree', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(chore),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, []);

    useEffect(() => {
        if (input) {
            fetch(`https://bitcamp-backend.vercel.app/getchoretoday?group_name=${input}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setData(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    }, [input]);

    const fetchChores = (endpoint) => {
        fetch(`https://bitcamp-backend.vercel.app/${endpoint}?group_name=${input}`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(event.target.elements.input.value);
    };

    const handleTodayChores = () => {
        fetchChores('getchoretoday');
    };

    const handleTomorrowChores = () => {
        fetchChores('getchoretomorrow');
    };

    return (
        <div className="bg-stone-900 w-screen min-h-screen pt-32 px-16">
            <form onSubmit={handleSubmit} className="text-white mb-16">
                <input name="input" type="text" className="bg-gray-800 p-2 rounded" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
            <div className="mb-4">
                <button onClick={handleTodayChores} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Today's Chores
                </button>
                <button onClick={handleTomorrowChores} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Tomorrow's Chores
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4 gap-y-32">
                {data && data.map((chore, index) => (
                    <Chores
                        key={index}
                        group_name={chore.group_name}
                        due_date={chore.due_date}
                        name={chore.name}
                        description={chore.description}
                        poster={chore.poster}
                        fulfiller={chore.fulfiller}
                    />
                ))}
            </div>
        </div>
    );
}