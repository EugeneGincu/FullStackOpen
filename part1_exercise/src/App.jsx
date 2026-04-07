import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const Display = (props) => {
    return (
        <p>{props.text}{props.value}</p>
    )
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const addGood = () => () => {
        setGood(good + 1);
    }

    const addNeutral = () => () => {
        setNeutral(neutral + 1);
    }

    const addBad = () => () => {
        setBad(bad + 1);
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={addGood()}/>
            <Button text="neutral" onClick={addNeutral()}/>
            <Button text="bad" onClick={addBad()}/>
            <h1>statistics</h1>
            <Display text="good " value={good} />
            <Display text="neutral " value={neutral} />
            <Display text="bad " value={bad} />
        </div>
    )
}

export default App