import '../styles/Navbar.css'
import {NavLink} from 'react-router-dom';

function Navbar() {
    
    return (
        <div className='navbar' id = 'links'>           
            <NavLink className='App-link' to="/">Home</NavLink>
            <NavLink className='App-link' to="/cats">Cats</NavLink> 
        </div>
    );
}


export default Navbar;
