import React from "react"
import { Route } from "react-router-dom"
import { GameDetail } from "./Games/GameDetail"
import { GameForm } from "./Games/GameForm"
import { GameList } from "./Games/GameList"
import { UpdateForm } from "./Games/updateGame"
import { ReviewForm } from "./reviews/ReviewForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <Route exact path="/games">
                <GameList/>
            </Route>
            <Route exact path="/games/:gameId(\d+)">
                <GameDetail />
            </Route>
            <Route exact path="/games/newgame">
                <GameForm/>
            </Route>
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
            <Route exact path="/games/updategame/:gameId(\d+)">
                <UpdateForm />
            </Route>
        </main>
    </>
}
