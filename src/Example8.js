import React, { useRef ,useEffect,useState} from 'react';

function Example8(){
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
       inputEl.current.value= 'hello world'
       console.log(inputEl)
    }

    const [text, setText] = useState('jspang')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current =text;
        console.log('textRef.current:', textRef.current)
    })

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input 上展示文字</button>

            <br />
            <hr />
            <br />
            <hr />


            <input value={text} onChange={(e)=>{setText(e.target.value)}} />



        </div>
    )
}

export default Example8