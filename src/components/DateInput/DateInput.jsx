import React, {useMemo, useRef, useState} from 'react';
import Button from "@mui/material/Button";
import DateView from "../DateView/DateView";
import './DateInput.css';

const DateInput = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');

    const dateInputRef = useRef(null);

    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <div className='date-input'>
            <div className='date-input-container'>
                <Button variant="outlined" onClick={() => setCount(count + 1)}>Count: {count}</Button>
                <input
                    type="date"
                    onChange={handleChange}
                    ref={dateInputRef}
                />
            </div>
            { useMemo(() =>  <DateView count={count} date={date} />, [date]) }
        </div>
    )
}

export default DateInput;
