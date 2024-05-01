import { IoMdAdd } from 'react-icons/io'
import './index.css'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

    const navigate = useNavigate()
    return(
        <>
\            <div className='home'>
                <h5>You don't have any tasks yet</h5>
                <span>Click on the + button to add one</span>
                <IoMdAdd className='add-btn' onClick={() => navigate("/add")} />
            </div>
        </>
    )
}