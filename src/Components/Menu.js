import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div>
                <button style={{border: 'none'}}><svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 18 18"><path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" /></svg>
                </button>
            </div>
        )
    }
}

export default Menu
