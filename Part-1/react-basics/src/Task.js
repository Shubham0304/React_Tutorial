export const Task = ({ id, taskName, deleteTask, Completed, completeTask }) => {
  return (
    <div style = {Completed ? {background:"green"} : {background:"white"}}>
      <h1>{taskName}</h1>
      {/* {Completed === true ? <h1 style={{color:"green"}}>{taskName}</h1> : <h1>{taskName}</h1>} */}
      <button onClick={() => {
        // Examples for reference only:

        // ✅ Approach 1 (verbose, in parent):
        // const updatedTaskList = todoList.filter((toDo) => {
        //   if (toDo.id === id) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // });
        // setTodoList(updatedTaskList);

        // ✅ Approach 2 (concise, in parent):
        // const updatedTaskList = todoList.filter((toDo) => toDo.id !== id);
        // setTodoList(updatedTaskList);

        // ✅ Final logic: Call the delete function passed from parent
        deleteTask(id);
      }}>
        Delete Task
      </button>

      <button onClick={ ()=>{completeTask(id)}}>
        Complete Task
      </button>
    </div>
  );
};
