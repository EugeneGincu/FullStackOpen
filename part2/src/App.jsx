import { useState } from 'react'
import Note from './components/Note'

const App = ({notes}) => {
    // Instead of const {notes} = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note} /> // key attribute is now defined for the Note component, not li tag
                    /* Instead of
                    <li key={note.id}>
                        {note.content}
                    </li>
                    */
                )}
            </ul>
        </div>
    )
}

export default App
