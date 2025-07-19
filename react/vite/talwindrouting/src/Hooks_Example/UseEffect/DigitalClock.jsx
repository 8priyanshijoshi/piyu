// import React, { useEffect, useState } from 'react'

// const DigitalClock = () => {

//     const [data,digitaldata] = useState(new Date().toLocaleTimeString())

//     useEffect( () => {
//         const date = setInterval(() => {
//             setTime(new date().toLocaleTimeString());
//         }, 1000);

//         return () => clearInterval(date);
//     },[]);

//   return (
//     <>
//          <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '20%' }}>
//             {data}
//         </div>
//     </>
//   )
// }

// export default DigitalClock

import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [date, dateTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            dateTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '20%' }}>
            {date}
        </div>
    );
};

export default DigitalClock;
