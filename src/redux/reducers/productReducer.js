import { GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_ERROR, SORT_PRODUCTS } from '../constants/product';
import { updateExpression } from '@babel/types';

let initialState = {
    products: [],
    isLoading: false,
    error: null,
    searchTerm: '',
    currentPage: 0,
    offset: 0,
    sorting: false
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {

        case GET_PRODUCTS_REQUEST:
            updated.isLoading = true;
            updated.error = null;

            if(action.payload) {
                updated.searchTerm = action.payload
            }

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

        case SORT_PRODUCTS:

            updated.products = action.payload;
            updated.isLoading = false;
            updated.error = null;
            updated.sorting = true;

            return updated;

        default:
            return state;
    }
}