import React, { useState ,useEffect} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')
        return ()=>{
            console.log('老弟，你走了!Index页面')
        }
    },[])
    return <h2>Index-page</h2>
}
function List(){
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List - page</h2>
}
function App(){
    const [count, setCount] = useState(0);
    // const [sex, setSex] = useState('男');
    // const [age, setAge] = useState(18);
    useEffect(()=>{
        console.log(`useEffect => you clicked ${count} times`)
    },[count])
    return(
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact  component={Index} />
                <Route path="/list"   component={List} />
            </Router>

            {/* <p>年龄是：{age}</p>
            <p>性别是：{sex}</p> */}
        </div>
    )
}
 
export default App;