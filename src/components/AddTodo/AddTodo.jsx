import React, { useContext } from 'react';
import shortid from 'shortid';
import { GlobalContext } from '../../context/GlobalState';

function AddTodo({ setFilterTitle }) {
    const { value, setValue, handleAdd } = useContext(GlobalContext);

    // Control input box
    const handleChange = (e) => {
        setValue({
            title: e.target.value,
            id: shortid.generate(),
            completed: false,
        });
    };

    // Control  Add Todo Button
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.title) {
            handleAdd(value);
        }
        setFilterTitle({ title: '' });
        setValue({ title: '', id: '', completed: false });
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="edit-bar">
                <input
                    type="text"
                    placeholder="Enter Todo"
                    onChange={(e) => handleChange(e)}
                    value={value.title}
                />

                <button type="submit" className="submit-btn">
                    Add Todo
                </button>
            </div>
        </form>
    );
}

export default AddTodo;
