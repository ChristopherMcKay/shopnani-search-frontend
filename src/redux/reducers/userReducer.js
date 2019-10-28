import { SIGN_IN_OR_SIGN_UP, LOG_OUT, REFRESH } from '../constants/userAuth';

let initialState = {
    user: null,
    isAuth: false
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {
        
        case SIGN_IN_OR_SIGN_UP:
            console.log('line 13:')
            console.log(action)
            updated.user = action.payload;
            updated.isAuth = true;

            return updated;

        case LOG_OUT:
            updated.user = null;
            updated.isAuth = false;
            return updated;

        case REFRESH:
        console.log('line 13:')
        console.log(action)
        updated.user = action.payload;
        updated.isAuth = true;
        
            return updated;

        default:
            return state;
    }
}