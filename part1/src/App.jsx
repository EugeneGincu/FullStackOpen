import {useState} from 'react'

// storing all state in a single object is a bad choice for this particular application, no benefit and more complexity
const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
        }
    )

    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,              // unpacks all properties, including left
            left: clicks.left + 1   // overwrites the left property
        }
        setClicks(newClicks)
        //Do not mutate state directly as in clicks.left++ then setClicks(clicks), set state to a new object that is passed to setClicks
    }

    // can pass object directly instead of assigning to variable first
    const handleRightClick = () => setClicks({...clicks,right: clicks.right + 1 })

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
        </div>
    )
}

export default App
