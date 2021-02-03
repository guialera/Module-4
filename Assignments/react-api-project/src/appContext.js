import React, { Component } from "react"

import axios from "axios"

const AppContext = React.createContext()

class AppContextProvider extends Component {
    state = {
        teams: [],
        standings: []
    }

    componentDidMount() {
        axios.get("https://statsapi.web.nhl.com/api/v1/teams/")
            .then(response => this.setState({
                teams: response.data
            }, function () { this.loadStandings() }))
            .catch(error => console.log(error))
    }

    loadStandings = () => {
        axios.get("https://statsapi.web.nhl.com/api/v1/standings?season=20192020")
            .then(response => this.setState({
                standings: response.data.records
            }, function () { console.log(this.state.standings) }))
            .catch(error => console.log(error))
    }

    updateStandings = (selectedSeason) => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/standings?season=${selectedSeason}`)
            .then(response => this.setState({
                standings: response.data.records
            }, function () { console.log(this.state.standings) }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <AppContext.Provider value={{ teams: this.state.teams, standings: this.state.standings, updateStandings: this.updateStandings }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export { AppContextProvider, AppContext }