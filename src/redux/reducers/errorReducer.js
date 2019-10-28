import { GET_ERRORS, CLEAR_ERRORS } from '../constants/error';

const initialState = {
    message: ''
}

export default ( state = initialState, action ) => {


    let updated = Object.assign({}, state);

    switch (action.type) {
        case GET_ERRORS:
            console.log('now we made it this far')
            updated.message = action.payload
            return updated;

        case CLEAR_ERRORS:
            updated.message = '';
            return updated;

        default:
            return state;
    }
}