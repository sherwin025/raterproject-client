import React, { useState } from "react"
import { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createRating, getGameRatings, getGameReviews, getSingleGames, updateRating } from "./GameManager"

export const GameDetail = () => {
    const [game, setGame] = useState([])
    const [reviews, setreviews] = useState([])
    const { gameId } = useParams()
    const history = useHistory()
    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [gameratings, allratings] = useState([])
    const theplayer = parseInt(localStorage.getItem("userId"))

    useEffect(() => {
        getSingleGames(parseInt(gameId)).then(res => setGame(res))
        getGameReviews(parseInt(gameId)).then(res => setreviews(res))
        getGameRatings(parseInt(gameId)).then(res => allratings(res))
    }, [gameId])

    const sendrating = (event) => {
        const ratingobj = {
            rating: event.target.value,
            game: gameId
        }

        let therating = gameratings.find(each => each.player === theplayer && each.game === parseInt(gameId))

        if (therating) {
            const ratingobjupdate = {
                rating: event.target.value,
                game: gameId,
                player: theplayer,
                id: parseInt(therating.id)
            }
            updateRating(ratingobjupdate).then(history.push("/games"))

        } else {
            createRating(ratingobj).then(history.push("/games"))
        }
    }

    const therating = () => {
        let therating = gameratings.find(each => each.player === theplayer && each.game === parseInt(gameId))
        return therating
    }

    return (<>
        <button onClick={() => { history.push("./newgame") }}>Create new Game </button>
        {
            <div >
                <div>Average Player Ratings: {game.average_rating}</div>
                <div>{game.title}</div>
                <div>{game.designer}</div>
                <div>{game.year_released}</div>
                <div>up to: {game.num_of_players} players</div>
                <div>est: time to play {game.est_time_to_play} Years!</div>
                <div>recommended age: min {game.age_recomendation}</div>
                <div>Category: { } </div>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Your Rating: </label>
                        <select type="text" name="categories" required autoFocus className="form-control"
                            onChange={sendrating}
                        >
                            <option>Rate Game:</option>
                            {
                                therating() ?
                                    ratings.map(each => {

                                        if (therating().rating === each) {
                                            return <option selected>{each}</option>
                                        } else {
                                            return <option>{each}</option>
                                        }
                                    }) : ratings.map(each => {
                                        return <option>{each}</option>
                                    })
                            }

                        </select>
                    </div>
                </fieldset>

            </div>
        }

        <button onClick={() => { history.push(`./${gameId}/review`) }}>Review Game </button>
        <div>Reviews:</div>
        {
            reviews.map((each) => {
                return <div key={each.id}>
                    {each.review}
                </div>
            })
        }
    </>)
}