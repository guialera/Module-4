import React, { useState } from "react"

import { useParams } from "react-router-dom"

import axios from "axios"

function TeamStats() {
    const { teamId } = useParams()

    const [stats, setStats] = useState([])

    React.useEffect(() => {

        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/stats`)
            .then(response => setStats(response.data.stats[0].splits[0].stat))
            .catch(error => console.log(error))

    }, [])

    console.log(stats)

    return (
        <div className="teamStatsDiv">
            <h1>2020-2021 Season Stats</h1>
            <p>Games Played: {stats.gamesPlayed}</p>
            <p>Games Won: {stats.wins}</p>
            <p>Games Lost: {stats.losses}</p>
            <p>Overtime Losses: {stats.ot}</p>
            <p>Total Points: {stats.pts}</p>
        </div>
    )
}

export default TeamStats