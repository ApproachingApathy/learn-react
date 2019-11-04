import React from 'react'

import Navbar from './Navbar'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <h1>I'm a header!</h1>
                    <p>Welcome Ephriam</p>
                </div>
                <Navbar />
            </header>
        )
    }
}

export default Header