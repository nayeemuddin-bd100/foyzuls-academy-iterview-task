import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import AddTodo from '../AddTodo/AddTodo';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

function Home() {
    const { items } = useContext(GlobalContext);

    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        setFilterData(items);
    }, [items]);

    // Filter Title for search section onChange value
    const [filterTitle, setFilterTitle] = useState({ title: '' });

    const showData = () =>
        filterData.map((item) => (
            <Item id={item.id} title={item.title} key={item.id} setFilterTitle={setFilterTitle} />
        ));

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2>Todo List</h2>

                    <AddTodo setFilterTitle={setFilterTitle} />

                    <SearchBar
                        filterTitle={filterTitle}
                        setFilterTitle={setFilterTitle}
                        setFilterData={setFilterData}
                    />

                    <div className="item-section">{showData()}</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
