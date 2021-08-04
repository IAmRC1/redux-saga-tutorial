import React from 'react'
import './button.css'

export default function Button({ title, ...rest}) {
    return (
        <button {...rest}>
            {title}
        </button>
    )
}

Button.defaultProps = {
    title: "Default Button"
}
