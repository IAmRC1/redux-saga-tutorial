import axios from 'axios'

// const BASE_URL = 'https://test.spaceflightnewsapi.net/api/v2'
// const token = 'qweqweasdqwe'

export const handleRequests = async (url, method = 'GET', head = {}) => {
    
    const config = {
        url,
        method,
        // url: `${BASE_URL}${url}`,
        headers: { ...head, },
        //data: body
    }
    const result = await axios(config)
    return result;

    // try {
    //     const result = await axios(config)
    //     toast("Data fetched successfully!");
    //     console.log('result', result)
    //     return result.data
    // }
    // catch(error){
    //     if (error.response) {
    //         // client received an error response (5xx, 4xx)
    //         // If your error object contains a response field, that means your server responded with a 4xx/5xx error. Usually this is the error we're most familiar with, and is most straightforward to handle.
    //         // Do things like a show a 404 Not Found page/error message if your API returns a 404. Show a different error message if your backend is returning a 5xx or not returning anything at all. You might think your well-architected backend won't throw errors - but its a matter of when, not if.
            
    //         console.log('in error.response')
            
    //         // console.log('error.response.data', error.response.data)
    //         // console.log('error.response.status', error.response.status)
    //         // console.log('error.response.headers', error.response.headers)
    //         // toast(error.response.data.message);

    //     } else if (error.request) {
    //         // client never received a response, or request never left
    //         // This happens when the browser was able to make a request, but for some reason, it didn't see a response.
    //         // This can happen if:
    //         // you're in a spotty network (think underground subway, or a building wireless network)
    //         // if your backend is hanging on each request and not returning a response on time
    //         // if you are making cross-domain requests and you're not authorized to make the request
    //         // if you're making cross-domain requests and you are authorized, but the backend API returns an error
    //         console.log('error.request', error.request);
    //         return
    //     } else {
    //         // anything else
    //         console.log('Error', error.message);
    //     }
    // }
}