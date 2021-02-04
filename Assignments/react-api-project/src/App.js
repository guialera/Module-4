import React from "react"

import { Switch, Link, Route } from "react-router-dom"

import Home from "./Home"

import Teams from "./Teams"

import TeamInfo from "./TeamInfo"

import TeamStats from "./TeamStats"

import TeamRoster from "./TeamRoster"

import Standings from "./Standings"

function App() {
    return (
        <div>
            <nav>
                <Link className="appLinkText" to="/">Home</Link>
                <Link className="appLinkText" to="/teams">Current Season Teams</Link>
                <Link className="appLinkText" to="/standings">Previous Season Standings</Link>
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
                    <TeamRoster />
                </Route>
                <Route path="/standings">
                    <Standings />
                </Route>
            </Switch>
        </div>
    )
}

export default App