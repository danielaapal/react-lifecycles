import React from 'react';

import './cta.component.css';

// it is a `functional component` because it doesn't need any local state management 
// or access to lifecycle methods in the component
export const Cta = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

