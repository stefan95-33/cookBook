const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems:[],
    orderTotal: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return  {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        default:
            return state;
    }
};

export default reducer;