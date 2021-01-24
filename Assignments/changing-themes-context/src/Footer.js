import React from "react"

import { ThemeContextConsumer } from "./themeContext"

function Footer() {
    return (
        <div>
            <ThemeContextConsumer>
                {name => (
                    <div className={`${name}-themeFooter`}>
                        <p>{`${name}ness envelops this footer!`}</p>
                    </div>
                )}
            </ThemeContextConsumer>
        </div>
    )
}

export default Footer