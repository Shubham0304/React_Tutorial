import './App.css';
import { useState } from 'react';



function App() {

    const [todoList, setTodoList] =useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        const newToDoList = [...todoList, newTask];
        setTodoList(newToDoList);
    } 
    return (
        <div className='App'>
            <div className='addTask'>
                <input  onChange={ (event)=> {
                    setNewTask(event.target.value);
                }}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='list'>
                {todoList.map( (task,index)=>{
                    return  <div key={index}>
                        <h1>{task}</h1>
                        <button onClick = {()=> {
    //Approach 1: 
                            // const updatedTaskList = todoList.filter((taskName)=> {
                            //     if (task===taskName) {
                            //         return false;
                            //     }
                            //     else {
                            //         return true;
                            //     }
                            // } )
    // Approach 2:  
                                const updatedTaskList = todoList.filter((taskName)=> {
                                    return task !==taskName
                                })
                            setTodoList(updatedTaskList);
                        }}>Delete Task</button>
                         </div>
                } )}
            </div>
        </div>
        

    );

}

export default App;
