import React, { useState, useContext } from "react"

import { AppContext } from "./appContext"

/*import axios from "axios"*/

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

        /*loadSeasonStats()*/
    }

    let year = selectedSeason

    console.log(standings)

    let newArr = standings.map(function (each) {
        return (each.teamRecords)
    })

    console.log(newArr)

    let mergeArr = [].concat.apply([], newArr)

    console.log(mergeArr)

    let allTeamStats = mergeArr.map(function (each) {
        return (
            <div key={each.team.id}>
                <h1>{each.team.name}</h1>
                <p>Games Played: {each.gamesPlayed}</p>
                <p>Wins: {each.leagueRecord.wins}</p>
                <p>Losses: {each.leagueRecord.losses}</p>
                <p>OT Losses: {each.leagueRecord.ot}</p>
                <p>Points: {each.points}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>{year} Season Standings</h1>
            <input
                type="text"
                value={season}
                name="season"
                placeholder="Enter Years Ex 20192020"
                onChange={event => setSeason(event.target.value)}
            />
            <button onClick={() => {updateStandings(season); selectSeason()}}>Select Season</button>

            <h1>Teams</h1>
            {allTeamStats}

        </div>
    )
}

export default Standings

//Edited Out

/*function loadSeasonStats() {

        axios.get(`https://statsapi.web.nhl.com/api/v1/standings?season=${selectedSeason}`)
            .then(response => setSeasonStats(response.data.records))
            .catch(error => console.log(error))

        console.log(seasonStats)
    }*/

/*React.useEffect(() => {

    axios.get(`https://statsapi.web.nhl.com/api/v1/standings?season=${selectedSeason}`)
        .then(response => setSeasonStats(response.data.records))
        .catch(error => console.log(error))

}, [])*/

/*console.log(seasonStats)*/

//Edited Out

//let metroStats = seasonStats[0].teamRecords
/*
let metroStats = standings[0].teamRecords
/*console.log(metroStats)*?

let metroDivision = metroStats.map(function (each) {
    return (
        <p key={each.team.id}>{each.team.name}</p>
        /*<p>{each.leagueRecord.wins}</p>,
        <p>{each.leagueRecord.losses}</p>,
        <p>{each.leagueRecord.ot}</p>*?
    )
})

//let atlanticStats = seasonStats[1].teamRecords
let atlanticStats = standings[1].teamRecords

let atlanticDivision = atlanticStats.map(function (each) {
    return (
        <p key={each.team.id}>{each.team.name}</p>
        /*<p>{each.leagueRecord.wins}</p>,
        <p>{each.leagueRecord.losses}</p>,
        <p>{each.leagueRecord.ot}</p>*?
    )
})

//let centralStats = seasonStats[2].teamRecords
let centralStats = standings[2].teamRecords

let centralDivision = centralStats.map(function (each) {
    return (
        <p key={each.team.id}>{each.team.name}</p>
        /*<p>{each.leagueRecord.wins}</p>,
        <p>{each.leagueRecord.losses}</p>,
        <p>{each.leagueRecord.ot}</p>*?
    )
})

//let pacificStats = seasonStats[3].teamRecords
let pacificStats = standings[3].teamRecords

let pacificDivision = pacificStats.map(function (each) {
    return (
        <p key={each.team.id}>{each.team.name}</p>
        /*<p>{each.leagueRecord.wins}</p>,
        <p>{each.leagueRecord.losses}</p>,
        <p>{each.leagueRecord.ot}</p>*?
    )
})*/

//Edited Out

/*
<h1>Metropolitan Division</h1>
{metroDivision}

<h1>Atlantic Division</h1>
{atlanticDivision}

<h1>Central Division</h1>
{centralDivision}

<h1>Pacific Division</h1>
{pacificDivision}
*/