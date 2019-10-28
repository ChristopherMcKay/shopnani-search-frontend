import { SIGN_IN_OR_SIGN_UP, LOG_OUT, REFRESH } from '../constants/userAuth'
import { GET_ERRORS, CLEAR_ERRORS } from '../constants/error'
import Axios from '../Axios/Axios';
import jwt_decode from 'jwt-decode';
import setAuthJWT from '../Axios/setAuthJWT';

import store from '../store/index';


export const Logout = () => dispatch => {
    dispatch({
        type: LOG_OUT
    })
}

export const googleLogin = (userInfo) => dispatch => {

    console.log('From userAuthAction', userInfo);

    let userObj = {
        name: userInfo.givenName + ' ' + userInfo.familyName,
        email: userInfo.email,
        avatar: userInfo.imageUrl
    }

    

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': "*"
        }
    };

    Axios.post('/user/login/gauth', userObj, axiosConfig)
            .then( result => {

                console.log(result.data);

                if(result.data.success === false) {
                    console.log('we made it this far')
                    dispatch({
                        type: GET_ERRORS,
                        payload: result.data.message
                    })
                }
                else {
                    const { token } = result.data;

                    localStorage.setItem('jwtToken', token);

                    setAuthJWT(token);

                    dispatch({
                        type: SIGN_IN_OR_SIGN_UP,
                        payload: userObj
                    })

                    dispatch({
                        type: CLEAR_ERRORS
                    })
                }



            })
            .catch( error => {
                console.log(error)
                dispatch({
                    type: GET_ERRORS,
                    payload: error.response.data.message
                })
            })

}

export const googleRegister = (userInfo) => dispatch => {

    console.log('From userAuthAction', userInfo);

    let userObj = {
        name: userInfo.givenName + ' ' + userInfo.familyName,
        email: userInfo.email,
        avatar: userInfo.imageUrl
    }

    

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': "*"
        }
    };

    Axios.post('/user/register/gauth', userObj, axiosConfig)
            .then( result => {

                console.log(result.data);

                if(result.data.success === false) {
                    console.log('we made it this far')
                    dispatch({
                        type: GET_ERRORS,
                        payload: result.data.message
                    })
                }
                else {
                    const { token } = result.data;

                    localStorage.setItem('jwtToken', token);

                    setAuthJWT(token);

                    dispatch({
                        type: SIGN_IN_OR_SIGN_UP,
                        payload: userObj
                    })

                    dispatch({
                        type: CLEAR_ERRORS
                    })
                }



            })
            .catch( error => {
                console.log(error)
                dispatch({
                    type: GET_ERRORS,
                    payload: error.response.data.message
                })
            })

}

export const login = (userInfo) => dispatch => {

    console.log('From userAuthAction', userInfo);

    let userObj = {
        name: userInfo.givenName + ' ' + userInfo.familyName,
        email: userInfo.email,
        avatar: userInfo.imageUrl,
        password: userInfo.password
    }

    

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': "*"
        }
    };

    Axios.post('/user/login', userObj, axiosConfig)
            .then( result => {

                console.log(result.data);

                if(result.data.success === false) {
                    console.log('we made it this far')
                    dispatch({
                        type: GET_ERRORS,
                        payload: result.data.message
                    })
                }
                else {
                    const { token } = result.data;

                    localStorage.setItem('jwtToken', token);

                    setAuthJWT(token);

                    dispatch({
                        type: SIGN_IN_OR_SIGN_UP,
                        payload: userObj
                    })

                    dispatch({
                        type: CLEAR_ERRORS
                    })
                }



            })
            .catch( error => {
                console.log(error.response.data.message)
                let message = ''

                if(error.response.data.message == 'Bad request!') {
                    message = 'Please fill out all fields!'
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: message
                })
            })

}

export const register = (userInfo) => dispatch => {

    console.log('From userAuthAction', userInfo);

    let userObj = {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
    }


    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': "*"
        }
    };

    Axios.post('/user/register', userObj, axiosConfig)
            .then( result => {

                console.log(result.data);

                if(result.data.success === false) {
                    console.log('we made it this far')
                    dispatch({
                        type: GET_ERRORS,
                        payload: result.data.message
                    })
                }
                else {
                    const { token } = result.data;

                    localStorage.setItem('jwtToken', token);

                    setAuthJWT(token);

                    dispatch({
                        type: SIGN_IN_OR_SIGN_UP,
                        payload: userObj
                    })

                    dispatch({
                        type: CLEAR_ERRORS
                    })
                }


            })
            .catch( error => {
                console.log(error.response.data.message)
                let message = ''

                if(error.response.data.message == 'Bad request!') {
                    message = 'Please fill out all fields!'
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: message
                })
            })

}

export const getRefID = () => dispatch => {

    let state = store.getState();

    console.log(state)

    let user = state.user.user;

    const token = localStorage.getItem('jwtToken') || undefined;

            if(token) {
                const decoded = jwt_decode(token);

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Access-Control-Allow-Origin': "*",
                        'x-access-token': token
                    }
                  };

                  Axios.get(`/getrefid`, axiosConfig)
                        .then( res => {
                            console.log(res.data.referrerId)

                            let userObj = {
                                avatar: user.avatar,
                                name: user.name,
                                email: user.email,
                                refID: res.data.referrerId
                            }


                            dispatch({
                                type: SIGN_IN_OR_SIGN_UP,
                                payload: userObj
                            })
                        })

            }

            
                


}

export const pageLoad = () => dispatch => {


    const token = localStorage.getItem('jwtToken') || undefined;

            if(token) {
                const decoded = jwt_decode(token);

                setAuthJWT(token);

                dispatch({
                    type: REFRESH,
                    payload: decoded
                })
            }

            
                


}