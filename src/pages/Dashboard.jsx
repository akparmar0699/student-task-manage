import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from'../components/TaskList'


const Dashboard = () => {
const Navigate = useNavigate()  
const [tasks, setTasks] = React.useState([]);

useEffect(() => {
  fetchData();
}, [])

const fetchData = async() =>{
  try {
  const response = await fetch("http://localhost:3000/tasks");
  const data = response.json();
  setTasks(data);
} catch (error) {
  console.log(error)
}
};

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    // localStorage.clear();
    Navigate("/login");

  }
  return (
    <div>
      <Navbar title="Task Management" onlogout={handleLogout}/>
      <h1>MY TASK</h1>
      <TaskList />
      <h1>Welcome to Dashboard.</h1>
    </div>
  )
}


export default Dashboard
