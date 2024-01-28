import React from 'react';
import { useState } from 'react';
import "./App.css"
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

  const [List, setList] = useState([
    {
      id: "gl1",
      text: "Components ",
    },
    {
      id: "gl2",
      text: "Props ",
    },
    {
      id: "gl3",
      text: "State",
    },
     {
      id: "gl4",
      text: "JSX",
    }
  ])

  const addNewGoalHandler = (Musab) => {
    // setList(List.concat(Musab)); Works but not the best way. 
    setList((prevList) => {
      return prevList.concat(Musab) 
    })
    // Always update the correct state  and works doesn't lag to get any fresh update. 
  };


  return <div className='main'>
    <h1 className='head'>ReactJS All Important!!</h1>
    <NewGoal onAdding={addNewGoalHandler} />

    <GoalList goal={List}></GoalList>
  </div>;
};

export default App;
