import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const success = (text) => {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast()
};

export const warning = (text) => {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
            background: "linear-gradient(to right, #FF0000, #C0C0C0)",
        },
    }).showToast()
};