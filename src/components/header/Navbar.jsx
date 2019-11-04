import React from 'react'

import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Stuff">Stuff</Link>
                    </li>
                    <li>
                        <Link to="/Things">Things</Link>
                    </li>
                </ul>
        )
    }
}

export default Navbar