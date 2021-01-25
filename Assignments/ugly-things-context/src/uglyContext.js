import React from "react"

import axios from "axios"

const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends React.Component {

    state = {
        title: "",
        url: "",
        description: "",
        /*newPost: ""*/
        uglyThingsArr: []
    }

    submittedInfo = (title, url, description) => {
        /*this.setState((prevState)=>{
            return{
                uglyThingsArr:[...prevState.uglyThingsArr, {title: title, image: image, url: url}]
            }
        })*/

        this.setState({
            title: title,
            url: url,
            description: description,
        }, function () { this.infoPost() })

        /*this.infoIntoArr()*/

        /*let newPost = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.url
        }*/

        /*this.infoPost()*/
    }

    /*infoIntoArr = () => {
        this.setState((prevState) => {
            return {
                uglyThingsArr: [...prevState.uglyThingsArr, { title: prevState.title, url: prevState.url, description: prevState.description }]
            }
        })
        console.log(this.state.uglyThingsArr)
    }*/

    infoPost = () => {
        /*this.setState((prevState) => {
            let newPost = {
                title: prevState.title,
                description: prevState.description,
                imgUrl: prevState.url
            }
            return {
                title: "",
                description: "",
                imgUrl: "",
                newPost: newPost
            }
        })*/

        let newPost = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.url
        }

        console.log(newPost)

        axios.post("https://api.vschool.io/alexramirez/thing", newPost)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

        axios.get("https://api.vschool.io/alexramirez/thing")
            .then(response => this.setState((prevState) => {
                return {
                    uglyThingsArr: [...prevState.uglyThingsArr, response.data]
                }
            }))
            .catch(error => console.log(error))

        console.log(this.state.uglyThingsArr)
    }


    render() {

        return (
            <Provider value={{ uglyThingsArr: this.state.uglyThingsArr, submittedInfo: this.submittedInfo }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { UglyContextProvider, Consumer as UglyContextConsumer }