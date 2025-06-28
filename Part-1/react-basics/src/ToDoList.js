import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {

    const [todoList, setTodoList] =useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        const task = {
            id: todoList.length===0 ? 1 : todoList[todoList.length-1].id+1,
            taskName: newTask,
            isCompleted: false
        };
        const newToDoList = [...todoList, task];
        setTodoList(newToDoList);
        
    }

const deleteTask = (id) => {
  const updatedTaskList = todoList.filter((task) => task.id !== id);
  setTodoList(updatedTaskList);
};

const completeTask = (id) => {
   const updatedTaskList=todoList.map((task)=> {
    if(task.id===id) {
        return {...task,isCompleted:true}
    }
    else {
        return task;
    }
   } )
   setTodoList(updatedTaskList);


}

    return (
        <div className='App'>
            <div className='addTask'>
                <input onChange={ (event)=> {
                    setNewTask(event.target.value);
                }}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='list'>
                {todoList.map( (task,index)=>{
                    return <Task key={task.id}
            id={task.id}
            taskName={task.taskName}
            deleteTask={deleteTask}
            Completed={task.isCompleted}
            completeTask= {completeTask}/>
                } )}
            </div>
        </div>
    );

}

export default App;
