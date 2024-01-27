import React from 'react';
import "./App.css"
import AddGoal from "./components/NewGoal/NewGoal.jsx"
import GoalList from './components/GoalList/GoalList';

const App = () => {

  const List = [
    {
      id: "gl1",
      text: "ANytingh",
    },
    {
      id: "gl2",
      text: "ANytingh",
    },
    {
      id: "gl3",
      text: "ANytingh",
    }
  ]

  const addGoalHandler = (newGoal) => {
    List.push(newGoal);
    console.log(List);
  }

  return <div className='main'>
    <h1 className='head'>let's gooo</h1>
    <AddGoal newaddinggoal={addGoalHandler} />
    <GoalList goal={List}></GoalList>
  </div>;
};

export default App;
