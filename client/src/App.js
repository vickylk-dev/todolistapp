import React ,{useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Addtask from './components/Addtask'
import Todolist from './components/Todolist'
import Updatetask from './components/Updatetask'

function App(){
  const [todolist,setTodolist]=useState([])
  const [tasktoUpdate,setTasktoUpdate]=useState({})
  const [showPopup,setShowPopup]=useState(false)
  useEffect(()=>{
    axios.get('https://todolistapp-lovat.vercel.app/api/tasks')
    .then(res=>{
      setTodolist(res.data)
    })
    .catch(err=>{ 
      console.log(err)
    })
  },[])
  const addtask=newTask=>{
    setTodolist([...todolist,newTask])
  }
  const taskComplete = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.isComplete = task.isComplete
      }
    })
    setTodolist(newList)
  }
  const removeTask = task => {
    const newList = todolist.filter(item => !(item._id === task._id))
    setTodolist(newList)
  }
  const updatetask=task=>{
    const newList=[...todolist]
    newList.forEach(item=>{
      if(item._id === task._id){
        item.todo = task.todo
      }
    })
    setTodolist(newList)
  }
  return(
    <div>
      <Addtask addtask={addtask} />
      <Todolist todolist={todolist} taskComplete = {taskComplete} removeTask = {removeTask} tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => setShowPopup(!showPopup)}/>
      {showPopup && <Updatetask task={tasktoUpdate} updatetask = {updatetask} removePopup = {() => setShowPopup(!showPopup)}/>}
    </div>
  )
}
export default App