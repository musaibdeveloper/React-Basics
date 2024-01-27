import React from 'react'

export default function GoalList({ goal }) {
    return (
        <ul>
            {goal.map((goals) => {
                return (
                    <li key = {goals.id} >{goals.text}</li>

                )
            })}
        </ul>
    )
}
