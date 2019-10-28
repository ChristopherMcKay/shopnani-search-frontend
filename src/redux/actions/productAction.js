import { GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_ERROR, SORT_PRODUCTS } from '../constants/product';

import Axios from '../Axios/Axios';
import deburr from 'lodash/deburr';
import store from '../store/index';


export const searchProducts = (searchObj) => dispatch => {

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*"
    }
  };

  let searchTerm = searchObj.product

  dispatch({
    type: GET_PRODUCTS_REQUEST,
    payload: searchTerm
})
    
  // HTTP request to the backend for products
    console.log('before api call')

    let startTime = new Date().getTime();

    Axios.get(`/search?q=${searchObj.product}&market=${searchObj.sellers}&by=${searchObj.sort}&s=${searchObj.order}&rl=${searchObj.minPrice}&ru=${searchObj.maxPrice}`, axiosConfig)
          .then(result => {

            let products = result.data;

            let finishTime = new Date().getTime();

            let performance = (finishTime - startTime) / 1000;
              
            console.log(`Performance is ${performance} seconds`);

            console.log(products);
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

            let errorz =  'No results found. Please try a different search.';
            
                dispatch({
                    type: GET_PRODUCTS_ERROR,
                    payload: errorz
                });
          })
  } 

  export const sortProducts = (params) => dispatch => {


    let state = store.getState();

    let products = [...state.products.initialProducts];


    setTimeout(function() {
      if(params.maxPrice || params.minPrice) {
        products = products.filter( product => {
          let amount = product.sellingPrice
          let rl = params.minPrice
          let ru = params.maxPrice
  
          return (amount >= rl && amount <= ru)
    
        })
      }

      if(params.order || params.sort) {
        let newProducts = products.sort((a, b) => {
          if(params.order === "desc") {
              switch(params.sort) {
                  case "discount":
                      return b.discountPercentage - a.discountPercentage
                      break
                  case "price": 
                  default:
                      return b.sellingPrice - a.sellingPrice
              }
          } else if(params.order === "asc") {
              switch(params.sort) {
                  case "discount":
                      return a.discountPercentage - b.discountPercentage
                      break
                  case "price": 
                  default:
                      return a.sellingPrice - b.sellingPrice
              }
          }
      })
        
                      dispatch({
                          type: SORT_PRODUCTS,
                          payload: newProducts
                      });

      }
      else {
        dispatch({
          type: SORT_PRODUCTS,
          payload: products
      });
      }
      

    },700);

    
} 