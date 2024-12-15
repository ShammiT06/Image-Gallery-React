import React from "react"
import ReactDom from "react-dom/client"
import './style.css'
import App from "./Components/App"



let root=ReactDom.createRoot(document.querySelector(".container"))




root.render(<App/>)