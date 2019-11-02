import React, { useRef } from 'react';

function Example8(){
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
       inputEl.current.value= 'hello world'
       console.log(inputEl)
    }

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input 上展示文字</button>

        </div>
    )
}

export default Example8