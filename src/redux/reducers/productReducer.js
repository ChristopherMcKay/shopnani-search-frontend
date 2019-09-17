import { GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_ERROR } from '../constants/product';

let initialState = {
    products: [],
    isLoading: false,
    error: null,
    searchTerm: '',
    currentPage: 0,
    offset: 0
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {

        case GET_PRODUCTS_REQUEST:
            updated.isLoading = true;
            updated.error = null;
            updated.searchTerm = action.payload

            return updated;

        case GET_PRODUCTS_ERROR:
                updated.error = action.payload;
                updated.isLoading = false;
                updated.products = [];
        
                return updated;
        
        case GET_PRODUCTS:

            updated.products = action.payload;
            updated.isLoading = false;
            updated.error = null;

            return updated;

        default:
            return state;
    }
}