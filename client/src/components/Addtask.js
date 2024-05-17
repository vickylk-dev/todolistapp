import './Addtask.css'
import React ,{useState}from 'react'
import axios from 'axios'
function Addtask(props) {
    const [task,Settask] = useState("")
    
    const addtask = () => {
        if(task.trim() === ''){
            return 
        } else {
            axios.post('https://todolistapp-lovat.vercel.app/api/tasks', {
                todo: task,
                isComplete: false
            }, {
                withCredentials: true 
            }).then(res => {
                Settask("");
                props.addtask(res.data);
            }).catch(err => console.log(err));
        }
    }
    return (
        <div className = 'addtask'>
            <input type='text' placeholder = 'Add Task . . .' value = {task} onChange = {event => Settask(event.target.value)}/>
            <button onClick = {() => addtask()}>Add Task</button>
        </div>
    )
}

export default Addtask