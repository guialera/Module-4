import React, { useContext } from "react"

import { AppContext } from "./appContext"

import { Link } from "react-router-dom"

function Teams(props) {
    const { teams } = useContext(AppContext)

    let list = teams.teams
    /*console.log(list)*/

    let teamList = list.map(function (each) {
        return (
            <h1 className="teamsNameList" key={each.id}>
                <Link className="teamsLinkText" to={`/teams/${each.id}`}>
                    {each.name}
                </Link>
            </h1>
        )
    })

    return (
        <div className="teamsDiv">
            <h1 className="teamsHeader">2020-2021 Season Teams</h1>
            <div className="teamsListDiv">
                {teamList}
            </div>
        </div>
    )
}

export default Teams