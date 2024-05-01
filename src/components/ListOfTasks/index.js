import { IoSearch } from 'react-icons/io5'
import './index.css'
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

export const ListofTasks = () => {
    const [optionsOpen, setOptionsOpen] = useState(false)

    function getTodoListFromLocalStorage() {
        let stringifiedTodoList = localStorage.getItem("todoListItems");
        let parsedTodoList = JSON.parse(stringifiedTodoList);
        //console.log(parsedTodoList)
        if (parsedTodoList === null) {
          return [];
        } else {
          return parsedTodoList;
        }
    }
      
    let todoList = getTodoListFromLocalStorage()

    return(
        <div className='list-of-tasks'>
            <div className='summary-container'>
                <h6>0%</h6>
                <div className='summary'>
                    <h6>You have 1 Task to complete.</h6>
                    <span>No tasks completed yet. Keep going!</span>
                </div>
            </div>
            <div className='tasks-search'>
                <span><IoSearch/></span>
                <input type='text' placeholder='Search for task...'/>
            </div>
            <>
                {
                    todoList.map(each => (
                        <div className='task'>
                            <div className='task-name'>
                                <h6>{each.taskName}</h6>
                                <span>{each.taskDesc}</span>
                            </div>
                            <div className='task-dates-edit'>
                                <div className='task-dates'>
                                    <small>{each.addedDate}</small>
                                    <small>{each.endDate}</small>
                                </div>
                                <div className='edits-con'>
                                    <HiDotsVertical className='edit' onClick={() => setOptionsOpen(!optionsOpen)} />
                                    {
                                    optionsOpen && <>
                                            <div className='edit-options'>
                                                <span>Delete <MdDelete/></span>
                                                <span>Edit <MdEdit/></span>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        </div>
    )
}