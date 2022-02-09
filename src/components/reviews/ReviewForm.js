import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getSingleGames } from "../Games/GameManager"
import { createReview } from "./ReviewManager"


export const ReviewForm = () => {
    const { gameId } = useParams()
    const [game, setgame] = useState([])
    const [thereview, setreview] = useState("")
    const history = useHistory()

    useEffect(() => {
        getSingleGames(parseInt(gameId)).then(setgame)
    }, [gameId])

    const handlechange = (evt) => {
        let copy = thereview
        copy = evt.target.value
        setreview(copy)
    }

    const submitReview = (evt) => {
        const review = {
            game: parseInt(gameId),
            review: thereview 
        }

        createReview(review).then(()=>{history.push(`./`)})
    }

    return (<>
        Leave a review for:  {game.title}

        <fieldset>
            <div className="form-group">
                <input type="text" name="review" required autoFocus className="form-control" 
                onChange={handlechange}/>
            </div>
        </fieldset>
        <button onClick={()=> submitReview()}> Submit Review:</button>
    </>)
}