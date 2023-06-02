import React from 'react';
import './DateView.css';

const DateView = ({count, date}) => (
    <div className='date-view'>
        <p>{count}</p>
        <p>{date}</p>
    </div>
);

export default DateView;
