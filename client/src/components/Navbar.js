import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {

    const [darkmode, setDarkMode] = useDarkMode(false);

    const toggle = e => {
        e.preventDefault()
        setDarkMode(!darkmode)
    }

    return(
        <div className='navbar'>
            <div className='center'>
                <h2>WWC</h2>
                <button 
                    onClick={toggle}
                    className={darkmode? ' dark-button dark-mode': 'dark-button'}
                >Dark Mode</button>
            </div>
        </div>
    )
}

export default Navbar;