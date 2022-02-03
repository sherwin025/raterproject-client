import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Raterproject } from "./components/raterproject.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Raterproject />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
