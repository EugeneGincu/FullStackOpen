import {useState} from 'react'

const App = () => {
    const  [value, setValue] = useState(10);

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const Display = props => <div>{props.value}</div>

//Either way is fine
    const setToValueRetFunc = (newValue) => () => {
        console.log('value now', newValue);
        setValue(newValue);
    }

    const setToValueCallFunc = (newValue) => {
        console.log('value now', newValue);
        setValue(newValue);
    }


    return (
        <div>
            <Display value={value} />
            <button onClick={setToValueRetFunc(1000)}>thousand</button>
            <button onClick={() => setToValueCallFunc(0)}>reset</button>
            <button onClick={setToValueRetFunc(value + 1)}>increment</button>
            <Button onClick={() => setToValueCallFunc(value + 1)} text="increment1" />
        </div>
    )
}

export default App
