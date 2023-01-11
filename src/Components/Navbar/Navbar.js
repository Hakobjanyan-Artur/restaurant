import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav'>
                    <div className='left'>
                        <div className='burger'>
                            <GiHamburgerMenu />
                        </div>
                        <NavLink className={({isActive}) => isActive ? 'click' : 'content'} to={'/menu'} end >Menu</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'click' : 'content'} to={'/team'} >Team</NavLink>
                    </div>
                    <div className='middle'>
                        <NavLink to={'./home'}>
                            <h1>Cibo gustoso</h1>
                        </NavLink> 
                    </div>
                    <div className='right'>
                        <NavLink className={({isActive}) => isActive ? 'click' : 'content'} to={'/events'} >Events</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'click' : 'content'} to={'/contact'} >Contact</NavLink>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Navbar