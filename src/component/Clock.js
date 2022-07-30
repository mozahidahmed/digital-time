import React, { useEffect, useState, } from 'react';
import './Clock.css';


const Clock = () => {
    const [clockState, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);


    return (

       <div className='mt-5'>
        <h1>digital clock</h1>
        <h1 className='clock-style'>{clockState}</h1>
      
       </div>



    );
};

export default Clock;