import React, { useState } from "react";

const ShortCircuit = () => {
    const [text,setText] = useState('');
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';
    const [isError,setIsError] = useState(false);
    return (
        <>
            {/* <h1>{firstValue}</h1>
            <h1>value: {secondValue}</h1> */}
            {/* {
                if(){
                    console.log('hello world')
                }
            } */}
            <h1>{text || 'john doe'}</h1>
            <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
            {isError && <h1>Error...</h1>}
            {isError? (<p>there is error...</p>) :(<p>there is no error</p>)}
            {/* {text && <h1>hello world</h1>}
            {!text && <h1>hello world</h1>} */}
        </>
    )
}

export default ShortCircuit;