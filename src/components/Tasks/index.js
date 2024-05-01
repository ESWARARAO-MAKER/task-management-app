import './index.css'
import { MdAddTask } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Tasks = () => {
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    const [desc, setDesc] = useState("")
    const [endDate, setEndDate] = useState("")
    const [fieldColor, setFieldColor] = useState("none")


    function getTodoListFromLocalStorage() {
        let stringifiedTodoList = localStorage.getItem("todoList");
        let parsedTodoList = JSON.parse(stringifiedTodoList);
        if (parsedTodoList === null) {
          return [];
        } else {
          return parsedTodoList;
        }
    }
      
    let todoList = getTodoListFromLocalStorage()

    const onCreateTask = () => {
        if (username != "" && username != " "){
            let newTodo = {
                taskName : username,
                taskDesc : desc ? desc : "",
                addedDate : new Date(),
                endDate : endDate ? endDate : "",
            }
            todoList.push(newTodo);
            localStorage.setItem("todoListItems", JSON.stringify(todoList))
            navigate("/tasks")
            console.log(todoList)
        }
        else{
            alert("enter the User Task")
            setFieldColor("red");
        }
    }

    const onUserName = (e) => {
        if (!e.target.value){
            alert("Please provide Task name!")
            setFieldColor("red");
        }
    }

    const onLeftClick = () => {
        navigate('/')
    }
    return(
        <div className='tasks'>
            <div className='create-task-container'>
                        <FaChevronLeft className='left' onClick={onLeftClick} />
                        <h2>Add New Task</h2>
                        <MdAddTask className='add'/>
                        <div className='input'>
                            <lable>Task Name</lable>
                            <input style={{borderColor : fieldColor}} type='text' required onBlur={onUserName} placeholder='Enter your Task name' onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <lable>Task Description(optional)</lable>
                            <input type='text' placeholder='Enter Task Description' onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <lable>Task Deadline(optional)</lable>
                            <input type='date' placeholder='DD-MM-YYYY' onChange={(e) => setEndDate(e.target.value)}/>
                        </div>
                        <button type='submit' className='add-task-btn' onClick={onCreateTask}>Create Task</button>
                    </div>
        </div>
    )
}