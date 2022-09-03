//import React from 'react';
import {Fragment} from 'react';

function Welcome(){
    return (
            // <>
            <Fragment>
            {/* <h2>Welcome Component {1+4}</h2> */}
            <h2>Welcome Component {Math.floor(Math.random() *50)}</h2>
            <p>jsx problem without using fragment or div</p>
            </Fragment>
            // </>
    );
}


export default Welcome;