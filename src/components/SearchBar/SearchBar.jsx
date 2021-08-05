import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function SearchBar({ setFilterTitle, filterTitle, setFilterData }) {
    const { items } = useContext(GlobalContext);

    const handleSearch = (e) => {
        setFilterTitle(e.target.value);
        const searchTermToLowerCase = e.target.value.toLowerCase();
        const filterData = items.filter((item) =>
            item.title.toLowerCase().includes(searchTermToLowerCase)
        );
        setFilterData(filterData);
    };
    return (
        <div className="edit-bar">
            <input
                type="text"
                placeholder="Search Data"
                onChange={(e) => handleSearch(e)}
                value={filterTitle.title}
            />
            <button type="button" className="submit-btn">
                Search
            </button>
        </div>
    );
}

export default SearchBar;
