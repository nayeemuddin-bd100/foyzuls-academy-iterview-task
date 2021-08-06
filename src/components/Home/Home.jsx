import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import AddTodo from '../AddTodo/AddTodo';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

// set lazy loading for data load dynamically
const Item = lazy(() => import('../Item/Item'));

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

                    <Suspense fallback={<h2>Loading</h2>}>
                        <div className="item-section">{showData()}</div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Home;
