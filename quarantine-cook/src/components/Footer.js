import React from 'react'

const Footer = () => {

    const date = new Date()

    return(

        <footer>
            <p>&copy; {date.getFullYear()} Quarantine Cook</p>
        </footer>
    )
}

export default Footer