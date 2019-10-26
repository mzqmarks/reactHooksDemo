import React, { useReducer } from 'react';
import ShowArea from './showArea';
import Buttons from './Button';
import {Color} from './color'

function App6(){
    return(
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}


export default App6