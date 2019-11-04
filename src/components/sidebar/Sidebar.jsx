import React from 'react' 

class Sidebar extends React.Component {
    render() {
        return (
            <aside>
                <h2>I'm a sidebar! Bro.</h2>
                <ul>
                    <li>Messages</li>
                    <li>Settings</li>
                </ul>
                <p>This is the end of the sidebar, bro!</p>
            </aside>
        )
    }
}

export default Sidebar