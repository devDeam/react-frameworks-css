import * as React from 'react';
import Navbar from './Navbar';


export default function Bootstrap (): JSX.Element {
    return(
        <React.Fragment>
            <Navbar/>
            <div>
                <h2>Bootstrap</h2>
            </div>
        </React.Fragment>
    );
}
