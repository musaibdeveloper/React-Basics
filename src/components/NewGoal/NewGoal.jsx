import React from 'react'
import { useState } from 'react'

import "./NewGoal.css"

export default function NewGoal({ onAdding }) {

    const [entertext, setentertext] = useState("");


    const addGoalHandler = event => {
        event.preventDefault();

        const Musab = {
            id: Math.random().toString(),
            text: entertext
        }

        setentertext("")

        onAdding(Musab);


    }
    
    const Handlingtext = (e) => {
       setentertext(e.target.value)
    }

    return (
      
        <form className='form'onSubmit = {addGoalHandler}>
            <input type="text" className='input-bar' placeholder='Enter text ...' value={entertext} onChange = {Handlingtext} />
            <button className='button'>Submit</button>
        </form>
  )
}
