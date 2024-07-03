import React, { useState, useEffect } from 'react';

function TimeAndLocation({ weather: { formattedLocalTime, name, country } }) {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const date = new Date().toLocaleString('en-US', {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const time = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
            setCurrentTime(`${date} | Local Time : ${time}`);
        }, 1000);
    }, []);

    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-xl font-extralight text-white'>{currentTime}</p>
            </div>
            <div className='flex items-center justify-center my-3'>
                <p className='text-3xl text-white'>{name}, {country}</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
