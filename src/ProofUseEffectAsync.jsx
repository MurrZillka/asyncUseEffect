import React, {useEffect, useState} from 'react';

function mockFetch(num) {
    console.log('promise')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('setTimeout')
            resolve(num)
        }, num * 1500)
    })
}


export const ProofUseEffectAsync = () => {

    const [data, setData] = useState(0)
    const [requestNumber, setRequestNumber] = useState(0)

    useEffect(() => {
        let ignoreRequest = false

        async function b() {
            const result = await mockFetch(requestNumber)
            if (!ignoreRequest) {
                setData(result)
            }
        }

        b()
        // return () => ignoreRequest = true;
    }, [requestNumber])

    const onClickHandler = (e) => {
        setRequestNumber(e.target.value)
    }

    console.log("Component renders")
    return (
        <div className="wrapper">
            <div className="data">
                <h2>Data: {data}</h2>
                <h2>Request: {requestNumber}</h2>
            </div>
            <button value={1} onClick={onClickHandler}>Request 1</button>
            <button value={2} onClick={onClickHandler}>Request 2</button>
            <button value={0} onClick={onClickHandler}>Reset</button>

        </div>
    );
};