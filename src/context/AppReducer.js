const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case 'DELETE_TODO': {
            const filterData = state.items.filter((v) => v.id !== action.payload);
            console.log(filterData);
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
