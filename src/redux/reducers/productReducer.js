import { GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_ERROR } from '../constants/product';

let initialState = {
    products: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    console.log(action);
    let updated = Object.assign({}, state);

    switch(action.type) {

        case GET_PRODUCTS_REQUEST:
            updated.isLoading = true;
            updated.error = null;

            return updated;

        case GET_PRODUCTS_ERROR:
                console.log('this is running')
                updated.error = action.payload;
                updated.isLoading = false;
                console.log(updated.error)
        
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