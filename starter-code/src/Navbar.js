import React, { Component } from 'react'
import CoolButton from './CoolButton'

export default class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img></a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <CoolButton/>                       
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
  }
}
