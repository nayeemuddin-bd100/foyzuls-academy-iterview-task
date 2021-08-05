import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import AddTodo from '../AddTodo/AddTodo';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

function Home() {
    const { items, filterData } = useContext(GlobalContext);

    const [value, setValue] = useState({
        title: '',
        id: '',
        completed: false,
    });

    // Filter Title for search section onChange value
    const [filterTitle, setFilterTitle] = useState({ title: '' });

    const showData = () =>
        filterData.length > 0
            ? filterData.map((item) => <Item id={item.id} title={item.title} key={item.id} />)
            : items.map((item) => <Item id={item.id} title={item.title} key={item.id} />);

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2>Todo List</h2>

                    <AddTodo value={value} setValue={setValue} setFilterTitle={setFilterTitle} />

                    <SearchBar
                        setValue={setValue}
                        filterTitle={filterTitle}
                        setFilterTitle={setFilterTitle}
                    />

                    <div className="item-section">{showData()}</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
