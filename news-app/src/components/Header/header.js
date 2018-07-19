import React from 'react';
import style from './header.css'
import { Link } from 'react-router-dom'
// import SideNav from './SideNav/sideNav'
const Header = (props) => {

    const navBar = () =>{
        return(
            <div className={style.navBar}>
                <i className="fas fa-bars"></i>
            </div>
        )

    }

    const logo = () =>{
        return(
            <Link to='/' className={ style.logo }>
                <img src="/images/nba_logo.png" alt="Header Logo"/>
            </Link>
        )
    }

    return(
        <header className={style.header}>
        {/* <SideNav {...props}/> */}
           <div className={style.subHeader}>
           { navBar() }
                { logo() }
            </div>
        </header>
    )
}

export default Header;