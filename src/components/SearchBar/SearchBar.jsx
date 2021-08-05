import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function SearchBar({ setValue, filterTitle, setFilterTitle }) {
    const { addSearchItem } = useContext(GlobalContext);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        addSearchItem(searchValue);
        setFilterTitle(e.target.value);
        setValue({ title: '', id: '', completed: false });
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
