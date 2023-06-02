import React, { useContext } from 'react';
import { ItemContext } from "../ItemContext/ItemContext";
import Button from "@mui/material/Button";
import './List.css';

const List = ({ items }) => {
    const { deleteItem } = useContext(ItemContext);

    return (
        <ul className="list">
            {items.map((item) => (
                <li key={item.id} className="list-item">
                    <span>{item.name}</span>
                    <Button variant="contained" onClick={() => deleteItem(item.id)}>Delete</Button>
                </li>
            ))}
        </ul>
    )
}

export default List;