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
            let suggestions = []

            for(let i = 0; i < 5; i++) {
                suggestions.push(result.data[i]);
            }
            
            if(suggestions.length > 0) {
                dispatch({
                    type: GET_SUGGESTIONS,
                    payload: suggestions
                });
            }
        
          })
          .catch( error => {
            console.log('we got an error', error)
          })
  } 