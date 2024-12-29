import '../styles/Header.css'
import Navbar from "./Navbar";

function Header() {
    return (
        <header className='Header'> 
            
            <div className='header-text'>
                Purr-fect companion
            </div>
            <br></br>
            <Navbar />
        </header>
    );
}

export default Header;
