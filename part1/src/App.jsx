import {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>

// OnSomething is recommended by react for props which take event handler functions
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [ counter, setCounter] = useState(0)

    // handleSomething is recommended by react for event handler functions
    const handleClick = () => {
        console.log('clicked')
    }

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)


    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text='plus'/>
            <Button onClick={setToZero} text='zero' />
            <Button onClick={decreaseByOne} text='minus' />

            <button onClick={() => setCounter(0)}>
                {/*Not a good idea to define event handlers within JSX-templates*/}
                zero
            </button>
        </div>
    );
}

export default App
