// import { BASE_URL } from '../config/apiConfig'
import { handleRequests, } from '../utils/handleAPI'

// export const fetchPosts = () => handleRequests('/articles');
export const fetchPosts = () => handleRequests('https://test.spaceflightnewsapi.net/api/v2/articles', 'GET');