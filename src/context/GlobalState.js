import React, { createContext, useReducer } from 'react';
import Items from '../data/Items';
import AppReducer from './AppReducer';

const initialState = {
    items: Items,
    filterData: [],
};

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const handleAdd = (item) => {
        dispatch({
            type: 'ADD_TODO',
            payload: item,
        });
    };

    const addSearchItem = (item) => {
        dispatch({
            type: 'ADD_SEARCH_ITEM',
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
                handleAdd,
                addSearchItem,
                handleDelete,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
