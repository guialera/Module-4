import React, { useState, useContext } from "react"

import { AppContext } from "./appContext"

function Standings(props) {
    const [season, setSeason] = useState("")
    const [selectedSeason, setSelectedSeason] = useState("")
    const [searchTeam, setSearchTeam] = useState("")
    const [foundTeam, setFoundTeam] = useState({ gamesPlayed: 0, points: 0, team: { id: 0, name: "Empty", }, leagueRecord: { wins: 0, losses: 0, ties: 0, ot: 0, } })
    const [showFoundTeam, setShowFoundTeam] = useState(false)
    /*const [seasonStats, setSeasonStats] = useState([])*/

    const { standings, updateStandings, year } = useContext(AppContext)

    /*setSeasonStats(standings)*/

    function selectSeason() {
        setSelectedSeason(season)
        console.log(selectedSeason)
        setSeason("")
    }

    function searchFoundTeam() {
        setSearchTeam("")

        performSearch(searchTeam)
        setShowFoundTeam(true)
    }

    function performSearch() {
        /*console.log(searchTeam)*/

        let sameTeam = mergeArr.find(each => searchTeam === each.team.name)

        if (sameTeam === undefined) {
            setFoundTeam({ gamesPlayed: 0, points: 0, team: { id: 0, name: "Empty", }, leagueRecord: { wins: 0, losses: 0, ties: 0, ot: 0, } })
        } else {
            setFoundTeam(sameTeam)
        }

        /*console.log(sameTeam)*/
    }

    let newYear = year

    let stringYear = newYear.toString()
    /*console.log(stringYear)*/

    let stringYearSplit = stringYear.split("")
    /*console.log(stringYearSplit)*/

    let firstYear = stringYearSplit[0] + stringYearSplit[1] + stringYearSplit[2] + stringYearSplit[3]
    let secondYear = stringYearSplit[4] + stringYearSplit[5] + stringYearSplit[6] + stringYearSplit[7]

    let combineYear = `${firstYear}-${secondYear}`

    /*console.log(combineYear)*/

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
                <div className="teamStandingsIndividual" key={each.team.id}>
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
                <div className="teamStandingsIndividual" key={each.team.id}>
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
            <h1 className="standingsHeader">{combineYear} Season Standings</h1>
            <input
                type="text"
                value={season}
                name="season"
                placeholder="Enter Years Ex 20192020"
                onChange={event => setSeason(event.target.value)}
            />
            <button onClick={() => { updateStandings(season); selectSeason(); setShowFoundTeam(false) }}>Select Season</button> <br />
            <div className="searchInput">
                <input
                    type="text"
                    value={searchTeam}
                    name="foundTeam"
                    placeholder="Name of Team"
                    onChange={event => setSearchTeam(event.target.value)}
                />
                <button onClick={() => { searchFoundTeam(searchTeam) }}>Search</button>
            </div>

            <h1 className="standingsHeader">Teams</h1>
            <div className="teamStandingsListDiv" style={{ display: showFoundTeam ? "none" : "flex" }}>
                {allTeamStats}
            </div>
            <div className="teamStandingsListDiv" style={{ display: showFoundTeam ? "flex" : "none" }}>
                <div className="teamStandingsIndividual" key={foundTeam.team.id}>
                    <h1 className="header">{foundTeam.team.name}</h1>
                    <p>Games Played: {foundTeam.gamesPlayed}</p>
                    <p>Wins: {foundTeam.leagueRecord.wins}</p>
                    <p>Losses: {foundTeam.leagueRecord.losses}</p>
                    <p style={{ display: typeof foundTeam.leagueRecord.ties != "number" ? "none" : "block" }}> Ties: {foundTeam.leagueRecord.ties}</p>
                    <p>OT Losses: {foundTeam.leagueRecord.ot}</p>
                    <p>Points: {foundTeam.points}</p>
                </div>
            </div>

        </div>
    )
}

export default Standings