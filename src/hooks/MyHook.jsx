import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
// function based components  cannot effectively manage data
// that changes/update them as they change,
// hence the introduction of  react hooks

//Hooks includes the following
//useStateHooks, useEffectsHooks, useParamsHooks, useContextHooks, useRefsHooks, customHooks
//useStateHooks
//useState hooks is used to update the state  of function based components
// useState 
const MyHook = () => {

    //hooks
    // the use stste is the innitial state
    const [count, setCount] = useState(9)
    const [theme, setTheme] = useState({
        bg: "",
        col: "black"
    })

    //UseEffectsHooks
    useEffect(()=>{
        console.log("useEffect Called");
    })
    //run only once on page load
    useEffect(()=>{
        console.log("useEffect Called once");
    }, []) //componentDidMount
  
    // useEffects hooks as componentDidUpdate
 useEffect(()=>{
    if(count === 5){
        setTheme({
            bg: "black",
            col: "white",
        })
    }
 }, [count]) // componentDidUpdate

 





    // let count = 0; 
    const handleIncrease = () => {
        // count +=1;
        setCount(count +1 )
    }
    const handleDecrease = () => {
        // count -=1;
        setCount(count -1 )
    }
    console.log(count)
  return (
    <div style={{backgroundColor: theme.bg, color: theme.col }}>
        <h1>my hook component</h1>
        <div className="">
            <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
            <span className='mx-4 fw-bold'> {count}</span>
            <button className='btn btn-outline-success' onClick={handleIncrease}>+</button>
           <p>{theme.col}</p>

           <div className="">
            <button className='btn btn-outline-danger me-4' onClick={()=>setTheme({
            bg: "RED",
            col : "WHITE"
            })} >RED</button>
            <button className='btn btn-outline-success' onClick={()=>setTheme({
            bg: "BLUE",
            col: "YELLOW"
            })}>BLUE</button>
           </div>

           {/* <p>{9}</p> */}
        </div>
    </div>
  )
}

export default MyHook