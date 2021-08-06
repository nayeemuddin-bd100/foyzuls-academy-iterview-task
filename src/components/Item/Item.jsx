import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Item.css';

function Item({ id, title, setFilterTitle }) {
    const { handleDelete } = useContext(GlobalContext);

    const deleteItem = () => {
        handleDelete(id);
        setFilterTitle({ title: '' });
    };

    return (
        <>
            <div true className="item-data">
                <input type="checkbox" />
                <div className="text-view"> {title}</div>
                <div className="icon-view">
                    <i
                        aria-hidden="true"
                        onClick={() => deleteItem()}
                        className="far fa-trash-alt"
                    />
                </div>
            </div>
        </>
    );
}

// Using React.memo to prevent re-render when type anything in input box
export default React.memo(Item);
