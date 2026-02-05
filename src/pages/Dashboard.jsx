import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

const Dashboard = () => {
  const navigate =useNavigate()
  const [tasks,setTasks]=useState([])

  useEffect(()=>{
    fetchData()
  },[])

const fetchData =async() =>{
  try{
  const response = await fetch("http://localhost:3000/tasks")
  const data = await response.json();
  setTasks(data);
  }
  catch(error){
    console.log(error)
  }
};

  const handleLogout = () =>{
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/Login')
  }

const handleAddTask = async (newTask) => {
  const tasktoAdd={...newTask,completed:false}
  try {
const response = await fetch("http://localhost:3000/tasks",{
method: "POST",
header:{"Content-type":"application/json"},
body: JSON.stringify (tasktoAdd),
    
  } );
  console.log(tasktoAdd)
  const data =await response.json();
  setTasks([...tasks,data])
}
  catch (error)
   {
    console.log(error)
  }


};

  return (
    <div>
      <Navbar title="task management" onLogout={handleLogout} />
      <h1>MY TASK</h1>
            <TaskForm addTask={handleAddTask}/>

      <TaskList tasks={tasks} />
      <h1>Welcome to dashboard</h1>
    </div>   
  )
}

export default Dashboard