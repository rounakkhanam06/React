import {useState} from "react";

export default function TodoList(){
    // set initial todos
    let [tasks, setTasks] = useState(["read","write"]);

    // new todos add
    let [newTodo, setNewTodo] = useState("");

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
     
    };

    const addTask =()=>{
        if (newTodo.trim() !== "") {
            // Add new task to the tasks list
            setTasks((prevTasks) => [...prevTasks, newTodo]);
            // Clear the input field
            setNewTodo("");
        }
    };


       // Delete task from the list
       const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, idx) => idx !== index));
    };
    

    // updating all 
    let UpperCaseAll = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => task.toUpperCase()) // Directly convert each task to uppercase
        );
    };
    
   
 
    return(
    <div>
        {<input placeholder="add a task" value={newTodo} onChange={updateTodoValue} ></input> }
        <button onClick={addTask}>Add Task</button>
        <br></br> <br></br> <br></br>
        <hr></hr>

        <h4>To-Do List</h4>
        <ul>
        {tasks.map((tasks, idx)=>(
            <li key={idx}> {tasks}
            <button onClick={() => deleteTask(idx)}>Delete</button>
            </li>
        ))}
        </ul>
        <button onClick={UpperCaseAll}>Uppercase All</button>
        </div>
        );
};