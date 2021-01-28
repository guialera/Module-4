import React from "react"

import { UglyContextConsumer } from "./uglyContext"

class Form extends React.Component {
    state = {
        title: "",
        url: "",
        description: "",
    }

    fillIn = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: [value]
        })
    }

    reset = () => {
        this.setState({
            title: "",
            url: "",
            description: ""
        })
    }

    render() {
        return (
            <div className="topFormDiv">
                <form className="form">
                    <input
                        type="text"
                        name="title"
                        placeHolder="Image Title"
                        value={this.state.title}
                        onChange={this.fillIn}
                    />
                    <input
                        type="text"
                        name="url"
                        placeHolder="Image Url"
                        value={this.state.url}
                        onChange={this.fillIn}
                    />
                    <input
                        type="text"
                        name="description"
                        placeHolder="Description"
                        value={this.state.description}
                        onChange={this.fillIn}
                    />
                </form>
                <UglyContextConsumer>
                    {data => (
                        <button onClick={() => data.submittedInfo(this.state.title, this.state.url, this.state.description)}>Submit Info</button>
                    )}
                </UglyContextConsumer>
                <button onClick={this.reset}>Reset Form</button>
            </div>
        )
    }
}

export default Form