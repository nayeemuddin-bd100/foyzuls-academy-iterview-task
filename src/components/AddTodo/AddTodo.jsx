import React, { useContext } from 'react';
import shortid from 'shortid';
import { GlobalContext } from '../../context/GlobalState';

function AddTodo({ value, setValue, setFilterTitle }) {
    const { handleAdd, addSearchItem } = useContext(GlobalContext);

    // Control input box
    const handleChange = (e) => {
        setValue({
            title: e.target.value,
            id: shortid.generate(),
            completed: false,
        });
    };

    // Control  Add Todo Button
    const handleSubmit = () => {
        if (value.title) {
            handleAdd(value);
        }
        addSearchItem([]);
        setFilterTitle({ title: '' });
        setValue({ title: '', id: '', completed: false });
    };
    return (
        <div className="edit-bar">
            <input
                type="text"
                placeholder="Enter Todo"
                onChange={(e) => handleChange(e)}
                value={value.title}
            />

            <button type="button" onClick={() => handleSubmit()} className="submit-btn">
                Add Todo
            </button>
        </div>
    );
}

export default AddTodo;
