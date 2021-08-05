const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'ADD_SEARCH_ITEM': {
            const searchData = state.items.filter((item) => {
                const titleToLowerCase = item.title.toLowerCase();
                return titleToLowerCase.includes(action.payload);
            });

            return {
                ...state,
                filterData: searchData,
            };
        }
        case 'DELETE_TODO': {
            const filterData = state.items.filter((v) => v.id !== action.payload);
            return {
                ...state,
                items: filterData,
            };
        }
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
