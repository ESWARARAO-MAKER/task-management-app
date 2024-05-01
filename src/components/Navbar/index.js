import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { CiCalendarDate } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from 'react';
import { LuListTodo } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export const Navbar = () => {
    const [openMenu, setIsOpenMenu] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);
    const navigate = useNavigate();
    
    const onPerson = () => {
        setIsOpenMenu(!openMenu)
    }

    const onLoggedout = () => {
        setLoggedOut(true)
        setTimeout(() => setLoggedOut(false), 3000)
    }


     return(
        <div className='navbar-container w-100 d-flex justify-content-center'>
            <div className='navbar nav-container'>
                <div className='logo-container'>
                    <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f44b.png" alt='img'/>
                    <div className='greet-text'>
                        <span className='greet'>Hello, user</span>
                        <span className='greeting'>Start your day with a plan! <CiCalendarDate  className='calender' /></span>
                    </div>
                </div>
                <IoPersonCircle className='person' onClick={onPerson}/>
            </div>
            {
                    openMenu && <>
                        <div className='open-menu-container'>
                            <div>
                                <h4 onClick={() => navigate("/")}><LuListTodo className='todo-icon'/> <span><span>Todo</span>App</span></h4>
                                <Link to ="/tasks" className='link'><h6><MdOutlineTaskAlt className='logout-icon' /> Tasks</h6></Link>
                                <Link to="/add" className='link'><h6><IoMdAdd className='logout-icon' /> Add Tasks</h6></Link>
                                <Link to= "/summary" className='link'><h6><IoStatsChartSharp/> Summary</h6></Link>
                            </div>
                            <button className='logout-btn' onClick={onLoggedout}><IoMdLogOut className='logout-icon'/> Logout</button>
                            <span onClick={() => setIsOpenMenu(false)}><IoCloseSharp/></span>
                        </div>
                    </>
                }
                {loggedOut && <p>You have been successfully logged out</p>}
        </div>
    )
}