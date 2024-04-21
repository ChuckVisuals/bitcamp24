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

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [ShowDeleteForm, setShowDeleteForm] = useState(false);
    const [formdata, setFormData] = useState({});

    //form data states for adding/deleting chore
    const [groupName, setGroupName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [fulfiller, setFulfiller] = useState('');

    //testing api
    useEffect(() => {
        console.log('formdata', formdata);
        fetch('https://bitcamp-backend.vercel.app/addchore', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [formdata]);

    useEffect(() => {
        console.log('input', input);
        if (input) {
            setTimeout(() => {
                fetch(`https://bitcamp-backend.vercel.app/getchoretoday?group_name=${input}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        setData(data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }, 1000);
        }

    }, [input, formdata]);

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

    const AddChore = () => {
        setShowForm(true);
    };

    const DeleteChore = () => {
        setShowDeleteForm(true);

    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        // Handle form submission
        const date = new Date(dueDate);
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        const chore = {
            group_name: groupName,
            due_date: formattedDate,
            name: name,
            description: description,
            poster: poster,
            fulfiller: fulfiller,
        };
        console.log('chore', chore);
        setShowForm(false);
        setFormData(chore);
        setInput(input) //used to refresh the page
    };

    const handleDeleteSubmitForm = (event) => {
        event.preventDefault();

        //remove from data when it finds the same name and group_name
        console.log('data', data);
        setData(prevData => prevData.filter(chore => chore.name != name));
        console.log('data', data);

        //remove from database
        fetch(`https://bitcamp-backend.vercel.app/deletechore?group_name=${groupName}&name=${name}`)
            .then(response => response.json())
            .then(data => {
                console.log('Deleted:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        setShowDeleteForm(false);
    };

    return (
        <div className="bg-stone-900 w-screen min-h-screen pt-32 px-16">

            {/* Buttons for dashboard */}
            <div className="flex justify-between items-center bg-stone-950 border border-gray-800 rounded-3xl p-4 mb-6">
                <form onSubmit={handleSubmit} className="text-white ">
                    <input name="input" type="text" placeholder="Enter group name" className="bg-gray-800 p-2 rounded" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
                <div>
                    <h1 className="text-4xl text-white justify-center items-center flex">DashBoard</h1>
                </div>
                <div className=" gap-2 grid grid-cols-2 justify-center items-center">
                    <button onClick={handleTodayChores} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Today's Chores
                    </button>
                    <button onClick={handleTomorrowChores} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Tomorrow's Chores
                    </button>
                    <button onClick={AddChore} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Add Chore
                    </button>
                    <button onClick={DeleteChore} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete Chore
                    </button>
                </div>
            </div>



            {/* Chores */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-32 justify-items-center">
                {data != null && data.map((chore, index) => (
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
            {/* Form */}
            {showForm && (
                <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
                    <form onSubmit={handleSubmitForm} className="bg-gray-900 p-4 rounded mt-20">

                        <div className="flex flex-col gap-10">
                            <label className='flex items-center'>
                                Group Name:
                                <input name="group_name" type="text" onChange={(e) => setGroupName(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <label className='flex items-center'>
                                Due Date:
                                <input name="due_date" type="datetime-local" onChange={(e) => setDueDate(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <label className='flex items-center'>
                                Name:
                                <input name="name" type="text" onChange={(e) => setName(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <label className='flex items-center'>
                                Description:
                                <textarea name="description" onChange={(e) => setDescription(e.target.value)} className=" bg-gray-800 p-2 rounded" />
                            </label>
                            <label className='flex items-center'>
                                Poster:
                                <input name="poster" type="text" onChange={(e) => setPoster(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <label className='flex items-center'>
                                Fulfiller:
                                <input name="fulfiller" type="text" onChange={(e) => setFulfiller(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                            <button
                                onClick={() => setShowForm(false)}
                                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            )}

            {ShowDeleteForm && (
                <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
                    <form onSubmit={handleDeleteSubmitForm} className="bg-gray-900 p-4 rounded mt-20">

                        <div className="flex flex-col gap-10">
                            <label className='flex items-center'>
                                Group Name:
                                <input name="group_name" type="text" onChange={(e) => setGroupName(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <label className='flex items-center'>
                                Name:
                                <input name="name" type="text" onChange={(e) => setName(e.target.value)} className="bg-gray-800 p-2 rounded" />
                            </label>
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                            <button
                                onClick={() => setShowDeleteForm(false)}
                                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            )}
        </div>
    );
}