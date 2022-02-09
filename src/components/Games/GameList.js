import React, { useState } from "react"
import { useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllGames } from "./GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllGames().then(res => setGames(res))
    }, [])

    return (<>
        <button onClick={() => { history.push("./games/newgame") }}>Create new Game </button>
        {
            games.map(each => {
                return <div key={each.id}>
                    <div><Link to={`./games/${each.id}`}>{each.title} </Link></div>
                    <div>up to: {each.num_of_players} players</div>
                    <div>Category: {
                    each.categories.map(
                        each => {
                            return <div>{each.label} </div>
                        }
                    )
                    } </div>
                    {
                        parseInt(localStorage.getItem("userId")) === each.createdby?.id ? <button onClick={()=> history.push(`./games/updategame/${each.id}`)}>Edit Game</button> : ""
                    }
                </div>
            })
        }
    </>)
}