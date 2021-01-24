import React from "react"

import { ThemeContextConsumer } from "./themeContext"

function Main() {
    return (
        <div>
            <ThemeContextConsumer>
                {name => (
                    <div className={`${name}-themeMain`}>
                        <p>What theme is it now? It is the {name} theme!</p>
                    </div>
                )}
            </ThemeContextConsumer>
        </div>
    )
}

export default Main