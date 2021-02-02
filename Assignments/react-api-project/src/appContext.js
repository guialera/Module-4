import React, { Component } from "react"

import axios from "axios"

const AppContext = React.createContext()

class AppContextProvider extends Component {
    state = {
        teams: [],
    }

    componentDidMount() {
        axios.get("https://statsapi.web.nhl.com/api/v1/teams/")
            .then(response => this.setState({
                teams: response.data
            }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <AppContext.Provider value={{ teams: this.state.teams }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export { AppContextProvider, AppContext }