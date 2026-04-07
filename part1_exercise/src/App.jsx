import { useState } from 'react'


const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const Display = (props) => {
    return (
        <>{props.text}{props.value}</>
    )
}

const Statistics = (props) => {
    let [good, neutral, bad, all] = props.values;
    if (all === 0) return <div>No feedback given</div>
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <StatisticLine text="good " value={good} />
                </tr>
                <tr>
                    <StatisticLine text="neutral " value={neutral} />
                </tr>
                <tr>
                    <StatisticLine text="bad " value={bad} />
                </tr>
                <tr>
                    <StatisticLine text="all " value={all}/>
                </tr>
                <tr>
                    <StatisticLine text="average " value={(good-bad)/all}/>
                </tr>
                <tr>
                    <StatisticLine text="positive " value={(good/all) * 100}/>
                </tr>
                </tbody>
            </table>
        </div>
    )
}


const StatisticLine = (props) => {
    return (
        <>
            <td>
                <Display text={props.text}/>
            </td>
            <td>
                <Display value={props.value}/>
            </td>
        </>
    )
}


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];
    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(Array(8).fill(0));
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

    const selectAnecdote = () => () => {
        let randomInt = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomInt);
    }

    const voteAnecdote = () => () => {
        let temp = [...vote];
        temp[selected] += 1;
        console.log(temp);
        setVote(temp);
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={addGood()}/>
            <Button text="neutral" onClick={addNeutral()}/>
            <Button text="bad" onClick={addBad()}/>
            <h1>statistics</h1>
            <Statistics values={[good, neutral, bad, all]}/>
            <br/>
            <h1>Anecdote of the day</h1>
            <Display text={anecdotes[selected]} />
            <br/>
            <Display text="votes: " value={vote[selected]} />
            <div>
                <Button text="vote" onClick={voteAnecdote(selected)} />
                <Button text="anecdote" onClick={selectAnecdote()} />
            </div>
            <h1>Anecdote with the most votes</h1>
            <Display text={anecdotes[vote.indexOf(Math.max(...vote))]} />

        </div>
    )
}

export default App