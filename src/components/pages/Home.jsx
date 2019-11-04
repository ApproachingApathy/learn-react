import React from 'react'
import {
    Link
} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <>
                <div class="tab-bar">
                    <ul>
                        <li>
                            <Link to="/Greet">Greeter</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Home