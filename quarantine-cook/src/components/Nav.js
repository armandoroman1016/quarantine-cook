import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import {Icon} from 'semantic-ui-react'

const Nav = () => {

    const [show, setShow] = useState(false)

    const iconColor = { color: "#fff"}

    return(
        <nav className = 'nav'>
            <h3>Quarantine Cook</h3>       
            <img 
            src = {show ? Close : Menu} 
            alt = 'hamburger menu icon' 
            className = 'icon'
            onClick = {() => setShow(!show)}
            />
            <div className = {show ? 'links' :'links hide'}>
                <ul>
                    <li>

                        <Link 
                        to = '/kitchen'
                        onClick = {() => setShow(false)}
                        >
                        <Icon
                        name = 'food'
                        style = {iconColor}
                        />
                        My Kitchen</Link>
                    </li>
                    <li>

                        <Link 
                        to = '/recipes'
                        onClick = {() => setShow(false)}
                        >
                        <Icon
                        name = 'book'
                        style = {iconColor}
                        />
                        Recipes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav  