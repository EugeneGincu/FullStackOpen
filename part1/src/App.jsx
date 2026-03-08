const date = new Date();

const Hello = (props) => {
    console.log(props);
    return (
        //To avoid having extra div elements use fragments
        <>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </>
    );
}

const App = () => {
    const name = 'Peter';
    const age = 10;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello />
            <Hello name='Maya' age={26 + 10} />
            <Hello name={name} age={age} />
            <p>{date.toString()}</p>
        </div>
    );
}

export default App
