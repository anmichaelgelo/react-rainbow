import React, { useState } from 'react'

export default function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {        
        e.preventDefault()
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Set a color: </label>
                {/* 
                    instead of validating a color, 
                    you can use type="color" to make it more specific 
                */}
                <input type="color" 
                placeholder='Enter a valid color'
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}
