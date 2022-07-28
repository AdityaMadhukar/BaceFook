import React, { useState } from 'react';

const Alert = (text) => {
    const [Style, setStyle] = useState('showAlert');

    return (
        <div className={Style}>
            {text};
            <button onClick={setStyle('hideAlert')}>OK</button>
        </div>
    );
}
 
export default Alert;