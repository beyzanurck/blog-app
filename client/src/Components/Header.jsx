import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header>
        <nav className='navbar'>
            <Link to="/" className='home'> Beyza's Blog </Link>
            <ul>
                <li data-testid="newPostTest">
                <Link to='/new-post'> New Post </Link>
                </li>
                <li data-testid="aboutTest">
                <Link to='/about'> About </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
