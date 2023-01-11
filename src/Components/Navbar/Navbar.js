import { NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
            <NavLink className={({isActive}) => isActive ? 'click' : 'content'} to={'/home'} end >home</NavLink>
            </div>
        </div>
    )
}

export default Navbar