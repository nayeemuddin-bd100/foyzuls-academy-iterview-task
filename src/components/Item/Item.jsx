import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Item.css';

function Item({ id, title }) {
    const { handleDelete } = useContext(GlobalContext);

    return (
        <>
            <div true className="item-data">
                <input type="checkbox" />
                <div className="text-view"> {title}</div>
                <div className="icon-view">
                    <i
                        aria-hidden="true"
                        onClick={() => handleDelete(id)}
                        className="far fa-trash-alt"
                    />
                </div>
            </div>
        </>
    );
}

export default Item;
