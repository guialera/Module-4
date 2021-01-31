import React from "react"

import { Switch, Link, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return (
        <div>
            <nav>
                <Link className="linkText" to="/">Home</Link>
                <Link className="linkText" to="/about">About</Link>
                <Link className="linkText" to="/services">Services</Link>
            </nav>

            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                </Switch>
            </div>

            <footer>
                Copyright 2021
            </footer>
        </div>
    )
}

export default App