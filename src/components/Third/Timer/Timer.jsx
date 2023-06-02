import React, { useEffect, useState } from 'react';

const Timer = ({ offTime }) => {
    const [counter, setCounter] = useState(offTime);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter])

    return (
        <div>
            { counter ? <p>{counter}</p> : <p>Done</p> }
        </div>
    );
}

export default Timer;
