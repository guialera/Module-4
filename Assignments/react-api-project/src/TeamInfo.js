import React, { useContext } from "react"

import { AppContext } from "./appContext"

import { useParams } from "react-router-dom"

function TeamInfo(props) {
    const { teamId } = useParams()
    const { teams } = useContext(AppContext)

    console.log(teamId)
    console.log(teams.teams)

    let team = teams.teams

    let teamInfo = team.find(each => each.id === Number(teamId))
    console.log(teamInfo)

    return (
        <div className="teamInfoDiv">
            <h1>{`Welcome To The ${teamInfo.name} Page!`}</h1>
            <p>Venue: {teamInfo.venue.name}</p>
            <p>City of Play: {teamInfo.venue.city}</p>
            <p>First Year Of Play: {teamInfo.firstYearOfPlay}</p>
        </div>
    )
}

export default TeamInfo