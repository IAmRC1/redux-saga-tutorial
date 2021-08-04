import { toast, } from 'react-toastify'

export default function Toast(type, msg){

    const toastId = Math.random(1,100).toString();

    return toast(msg, {
        toastId,
        type,
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // progress: undefined, for custom progress bar
    });
}