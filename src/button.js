import React, {useState, useEffect} from 'react';

function Button(props) {
    return (
        <>
            <span style={{padding: '10px', border: '1px solid #ddd', background: 'red', color: '#fff'}}>{props.buttonText}</span>
        </>
    );
}

export default Button;
