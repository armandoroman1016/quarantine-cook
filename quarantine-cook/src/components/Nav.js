import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {

    return(
        <nav className = 'nav'>
            <h3>Quarantine Cook</h3>       
            <div className = 'links'>
                <Link to = '/kitchen'>Kitchen</Link>
                <Link to = '/recipes'>Recipes</Link>
            </div>
        </nav>
    )
}

export default Nav  