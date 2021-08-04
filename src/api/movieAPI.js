// import { BASE_URL } from '../config/apiConfig'
import { handleRequests, } from '../utils/handleAPI'

const token = 'hAUpCGlhPqHT_DHgfxE-';

export const fetchMovie = () => handleRequests(
    'https://the-one-api.dev/v2/movie', 
    'GET', 
    { 'Authorization': `Bearer ${token}` 
});