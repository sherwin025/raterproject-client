import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getAllCategories, getSingleGames, UpdateGame } from "./GameManager"

export const UpdateForm = () => {
    const [game, setgame] = useState({})
    const [category, setcategories] = useState([])
    const history = useHistory()
    const { gameId } = useParams()

    useEffect(() => {
        getAllCategories().then(res => setcategories(res))
        getSingleGames(parseInt(gameId)).then(setgame)
    }, [gameId])

    const changeGameState = (event) => {
        let copy = {...game}
        copy[event.target.name] = event.target.value
        setgame(copy)
    }


    return (<>
        <form className="gameForm">
            <h2 className="gameForm__title">Update Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        defaultValue={game.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        defaultValue={game.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Year Released: </label>
                    <input type="text" name="year_released" required autoFocus className="form-control"
                        defaultValue={game.year_released}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Game Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        defaultValue={game.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Number of Players: </label>
                    <input type="text" name="num_of_players" required autoFocus className="form-control"
                       defaultValue={game.num_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Estimated time to play: </label>
                    <input type="text" name="est_time_to_play" required autoFocus className="form-control"
                        defaultValue={game.est_time_to_play}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Minimum rec. age: </label>
                    <input type="text" name="age_recomendation" required autoFocus className="form-control"
                        defaultValue={game.age_recomendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Game Category: </label>
                    <select type="text" name="categories" required autoFocus className="form-control"
                        onChange={changeGameState}
                    >
                        <option>Select a Category</option>
                        {
                            category.map(type => {
                                return <option key={type.id} value={type.id}>{type.label}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // Send POST request to your API
                    UpdateGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    </>)
}
