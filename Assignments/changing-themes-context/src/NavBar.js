import React from "react"

import { ThemeContextConsumer } from "./themeContext"

function NavBar() {
    return (
        <div>
            <ThemeContextConsumer>
                {name => (
                    <div className={`${name}-themeNavBar`}>
                        <p>{name}Home</p>
                        <p>{name}Info</p>
                        <p>{name}Number</p>
                    </div>
                )}
            </ThemeContextConsumer>
        </div>
    )
}

export default NavBar