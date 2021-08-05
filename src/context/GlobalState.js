import React, { createContext, useReducer, useState } from 'react';
import Items from '../data/Items';
import AppReducer from './AppReducer';

const initialState = {
    items: Items,
};

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [value, setValue] = useState({
        title: '',
        id: '',
        completed: false,
    });

    const handleAdd = (item) => {
        dispatch({
            type: 'ADD_TODO',
            payload: item,
        });
    };

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                items: state.items,
                filterData: state.filterData,
                value,
                setValue,
                handleAdd,
                handleDelete,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
