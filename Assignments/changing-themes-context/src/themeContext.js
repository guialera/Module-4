import React from "react"

const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        theme: "light"
    }

    themeChange = () => {
        this.setState((prevState) => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }

    render() {
        return (
            <Provider value={this.state.theme}>
                {this.props.children}
                <div className="buttonDiv">
                    <button onClick={this.themeChange}>Change Theme</button>
                </div>
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }