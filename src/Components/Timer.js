import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
const [time, setTime] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setTime(time => time + 1);
    }, 1000);
    return () => clearInterval(interval);
}, []);

return (
    <p className="timer">
        {time} seconds have elapsed since mounting
    </p>
);
};

export default Timer;