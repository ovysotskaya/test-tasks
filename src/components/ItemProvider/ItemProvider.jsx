import React, {useState} from 'react';
import { ItemContext } from "../ItemContext/ItemContext";

const ItemProvider = (props) => {
    const initialState = [
        {
            name: "One",
            id: 1
        },
        {
            name: "Two",
            id: 2
        },
        {
            name: "Three",
            id: 3
        },
        {
            name: "Four",
            id: 4
        },
        {
            name: "Five",
            id: 5
        }
    ];
    const [items, setItems] = useState(initialState);

    const deleteItem = (id) =>
        setItems((items) => items.filter((item) => item.id !== id));

    const value = {
        items,
        deleteItem
    };

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;