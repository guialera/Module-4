import React from "react"

import ReactDOM from "react-dom"

import App from "./App"

import { UglyContextProvider } from "./uglyContext"

ReactDOM.render(
    <UglyContextProvider>
        <App />
    </UglyContextProvider>,
    document.getElementById("root")
)