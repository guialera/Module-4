import React, { useState } from "react"

import { useParams } from "react-router-dom"

import axios from "axios"

function TeamRoster() {
    const { teamId } = useParams()

    const [roster, setRoster] = useState([])
    const [toggle, setToggle] = useState(false)

    React.useEffect(() => {

        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`)
            .then(response => setRoster(response.data.teams[0].roster.roster))
            .catch(error => console.log(error))

    }, [])

    function toggleHandle() {
        setToggle(prevToggle => !prevToggle)
    }

    /*console.log(roster)*/

    let player = roster.map(function (each) {
        return (
            <div className="singlePlayer" key={each.person.id}>
                <h1 className="header">{each.person.fullName} #{each.jerseyNumber}</h1>
                <p>Position: {each.position.name}</p>
            </div>
        )
    })

    return (
        <div className="teamRosterDiv">
            <div className="rosterHeaderButtonDiv">
                <h1 className="header">Current Team Roster</h1>
                <button onClick={toggleHandle}>Display Roster</button>
            </div>
            <div style={{ display: toggle ? "block" : "none" }}>
                <div className="playersDiv">
                    {player}
                </div>
            </div>
        </div>
    )
}

export default TeamRoster