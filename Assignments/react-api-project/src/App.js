import React from "react"

import { Switch, Link, Route } from "react-router-dom"

import Home from "./Home"

import Teams from "./Teams"

import TeamInfo from "./TeamInfo"

import TeamStats from "./TeamStats"

import Standings from "./Standings"

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/standings">Standings</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/teams">
                    <Teams />
                </Route>
                <Route path="/teams/:teamId">
                    <TeamInfo />
                    <TeamStats />
                </Route>
                <Route path="/standings">
                    <Standings />
                </Route>
            </Switch>
        </div>
    )
}

export default App