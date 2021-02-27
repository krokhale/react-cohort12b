import React, {useState, useEffect} from 'react';

function MyLi(props) {
    console.log('the props are', props)
    return (
        <>
            <li style={{fontSize: '20px', fontWeight: 'bold', color: 'red'}}>{props.txt}</li>

        </>
    );
}

export default MyLi;
