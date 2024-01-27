import React from 'react'
import "./NewGoal.css"

export default function NewGoal({ newaddinggoal }) {

    const addGoalHandler = (event) => {
        event.preventdefault()

        const newGoal = {
            id: Math.random().toString(),
            text : "My adding the goal"
        }

        console.log(newGoal);


    }

    return (
        <form className='forms' onSubmit={addGoalHandler}>
            <input type="text" />
            <button>Submit</button>
        </form>
    )
}
