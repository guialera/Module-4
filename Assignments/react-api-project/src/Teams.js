import React, { useContext } from "react"

import { AppContext } from "./appContext"

import { Link } from "react-router-dom"

function Teams(props) {
    const { teams } = useContext(AppContext)

    let list = teams.teams
    console.log(list)

    let teamList = list.map(function (each) {
        return (
            <h1 key={each.id}>
                <Link to={`/teams/${each.id}`}>
                    {each.name}
                </Link>
            </h1>
        )
    })

    return (
        <div>
            Teams
            {teamList}
        </div>
    )
}

export default Teams