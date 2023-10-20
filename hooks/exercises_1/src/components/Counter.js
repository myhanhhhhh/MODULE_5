import {useState} from "react"

function Count() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrease1 = () => {
        setCount1(count1 + 1)
    }
    const handleIncrease2 = () => {
        setCount2(count2 + 2)
    }
    return (
        <div>
            <h5>Count: {count1}</h5>
            <button onClick={handleIncrease1}>Add 1</button>
            <h5>Count: {count2}</h5>
            <button onClick={handleIncrease2}>Add 2</button>
        </div>
    )
}

export default Count;