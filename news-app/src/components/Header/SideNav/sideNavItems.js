import React from 'react';
import { Link } from 'react-router-dom';
import style from './sideNav.css';


const SideNavItems = () =>{

    const item = [
        {
            type: style.items,
            icon:'fas fa-home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.items,
            icon:'fas fa-newspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: style.items,
            icon:'fas fa-play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: style.items,
            icon:'fas fa-sign-in-alt',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.items,
            icon:'fas fa-sign-out-alt',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]

    const showItems= () =>{
        return item.map((item,i)=>{
            return(
                <div key={i} className={ item.type }>
            <Link to={item.link}>
            <i className={item.icon }></i>{ item.text }
            </Link>
        </div>
            )
        })
    }

    

    return(
        <div>
            { showItems() }
            </div>
    )
}

export default SideNavItems;