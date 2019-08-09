import { GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_ERROR } from '../constants/product';
import Axios from '../Axios/Axios';
import deburr from 'lodash/deburr';


export const searchProducts = (searchObj) => dispatch => {

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*"
    }
  };

  dispatch({
    type: GET_PRODUCTS_REQUEST
})
    
  // HTTP request to the backend for products
    console.log('we made it here dawg')
    Axios.get(`/search?q=${searchObj.product}&by=${searchObj.sort}&s=${searchObj.order}`, axiosConfig)
          .then(result => {

            let products = result.data
            
            if(products.length > 0) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: products
                });
            }
            else {
                console.log('line 29')

                let error =  'No results found. Please try a different search.';
            
                dispatch({
                    type: GET_PRODUCTS_ERROR,
                    payload: error
                });
            }
          })
          .catch( error => {
            console.log('we got an error', error)
          })
  } 