import React, { useState, useContext } from "react"

import { AppContext } from "./appContext"

function Standings(props) {
    const [season, setSeason] = useState("")
    const [selectedSeason, setSelectedSeason] = useState("")
    /*const [seasonStats, setSeasonStats] = useState([])*/

    const { standings, updateStandings } = useContext(AppContext)

    /*setSeasonStats(standings)*/

    function selectSeason() {
        setSelectedSeason(season)
        /*console.log(selectedSeason)*/
        setSeason("")
    }

    let year = selectedSeason

    /*console.log(standings)*/

    let newArr = standings.map(function (each) {
        return (each.teamRecords)
    })

    /*console.log(newArr)*/

    let mergeArr = [].concat.apply([], newArr)

    /*console.log(mergeArr)*/

    let allTeamStats = mergeArr.map(function (each) {
        if (typeof each.leagueRecord.ties === "number") {
            return (
                <div key={each.team.id}>
                    <h1 className="header">{each.team.name}</h1>
                    <p>Games Played: {each.gamesPlayed}</p>
                    <p>Wins: {each.leagueRecord.wins}</p>
                    <p>Losses: {each.leagueRecord.losses}</p>
                    <p>Ties: {each.leagueRecord.ties}</p>
                    <p>OT Losses: {each.leagueRecord.ot}</p>
                    <p>Points: {each.points}</p>
                </div>
            )
        } else if (typeof each.leagueRecord.ties !== "number") {
            return (
                <div key={each.team.id}>
                    <h1 className="header">{each.team.name}</h1>
                    <p>Games Played: {each.gamesPlayed}</p>
                    <p>Wins: {each.leagueRecord.wins}</p>
                    <p>Losses: {each.leagueRecord.losses}</p>
                    <p>OT Losses: {each.leagueRecord.ot}</p>
                    <p>Points: {each.points}</p>
                </div>
            )
        }
    })

    return (
        <div className={"standingsDiv"}>
            <h1>{year} Season Standings</h1>
            <input
                type="text"
                value={season}
                name="season"
                placeholder="Enter Years Ex 20192020"
                onChange={event => setSeason(event.target.value)}
            />
            <button onClick={() => { updateStandings(season); selectSeason() }}>Select Season</button>

            <h1>Teams</h1>
            {allTeamStats}

        </div>
    )
}

export default Standings