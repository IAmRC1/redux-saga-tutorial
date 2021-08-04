// import { BASE_URL } from '../config/apiConfig'
import { handleRequests, } from '../utils/handleAPI'

export const fetchRecipeImage = () => handleRequests('https://foodish-api.herokuapp.com/api', 'GET', {});

// { 'Authorization': `Bearer ${token}` }