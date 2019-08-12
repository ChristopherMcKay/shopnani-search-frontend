import { GET_SUGGESTIONS, GET_SUGGESTIONS_REQUEST, } from '../constants/suggestion';

let initialState = {
    suggestions: [],
    isLoading: false
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type) {

        case GET_SUGGESTIONS_REQUEST:
            updated.isLoading = true;

            return updated;

        
        case GET_SUGGESTIONS:

            updated.suggestions = action.payload;
            updated.isLoading = false;

            return updated;

        default:
            return state;
    }
}