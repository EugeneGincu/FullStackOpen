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

const Statistics = (props) => {
    let [good,bad,all] = props.values;
    // console.log(props.values[0]);
    return (
        <div>
            <Display text="all " value={all}/>
            <Display text="average " value={(good-bad)/all}/>
            <Display text="positive " value={(good/all) * 100}/>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);


    const addGood = () => () => {
        let temp = good + 1;
        setGood(temp);
        setAll(temp + neutral + bad);
    }

    const addNeutral = () => () => {
        let temp = neutral + 1;
        setNeutral(temp);
        setAll(temp + good + bad);
    }

    const addBad = () => () => {
        let temp = bad + 1;
        setBad(temp);
        setAll(temp + good + neutral);

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
            <Statistics values={[good, bad, all]}/>
        </div>
    )
}

export default App