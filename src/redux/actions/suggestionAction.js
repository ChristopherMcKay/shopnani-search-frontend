import { GET_SUGGESTIONS, GET_SUGGESTIONS_REQUEST } from '../constants/suggestion';
import Axios from '../Axios/Axios';

export const getSuggestions = (searchTerm) => dispatch => {

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*"
    }
  };

  dispatch({
    type: GET_SUGGESTIONS_REQUEST
})
    
  // HTTP request to the backend for search suggestions
    Axios.get(`/autocomp?q=${searchTerm}`, axiosConfig)
          .then(result => {
            let suggestions = result.data
            
            if(suggestions.length > 0) {
                dispatch({
                    type: GET_SUGGESTIONS,
                    payload: suggestions
                });
            }
            else {
                console.log('line 29')

                let error =  'No results found. Please try a different search.';
            
            }
          })
          .catch( error => {
            console.log('we got an error', error)
          })
  } 