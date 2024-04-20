import 'rsuite/Calendar/styles/index.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';


function getTodoList(date: { getDate: () => any; }) {
    const day = date.getDate();

    switch (day) {
        case 10:
            return [
                { time: '10:30 am', title: 'Meeting' },
                { time: '12:00 pm', title: 'Lunch' }
            ];
        case 15:
            return [
                { time: '09:30 pm', title: 'Products Introduction Meeting' },
                { time: '12:30 pm', title: 'Client entertaining' },
                { time: '02:00 pm', title: 'Product design discussion' },
                { time: '05:00 pm', title: 'Product test and acceptance' },
                { time: '06:30 pm', title: 'Reporting' },
                { time: '10:00 pm', title: 'Going home to walk the dog' }
            ];
        default:
            return [];
    }
}


export default function Home() {
    return (
        <div className="bg-gray-900 rounded-xl m-10">
            <Calendar bordered={true} />
        </div>
    );
}