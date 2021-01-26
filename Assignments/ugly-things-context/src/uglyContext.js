import React from "react"

import axios from "axios"

const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends React.Component {

    state = {
        title: "",
        url: "",
        description: "",
        id: "",
        showForm: false,
        /*newPost: ""*/
        uglyThingsArr: []
    }

    componentDidMount() {
        /*axios.get("https://api.vschool.io/alexramirez/thing")
            .then(response => this.setState((prevState) => {
                return {
                    uglyThingsArr: [...prevState.uglyThingsArr, response.data]
                }
            }, function () { console.log(this.state.uglyThingsArr) }))
            .catch(error => console.log(error))*/

        axios.get("https://api.vschool.io/alexramirez/thing")
            .then(response => this.setState({
                uglyThingsArr: response.data
            }, function () { console.log(this.state.uglyThingsArr) }))
            .catch(error => console.log(error))
    }

    fillIn = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: [value]
        })
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

        /*axios.get("https://api.vschool.io/alexramirez/thing")
            .then(response => this.setState((prevState) => {
                return {
                    uglyThingsArr: [...prevState.uglyThingsArr, response.data]
                }
            }))
            .catch(error => console.log(error))*/

        axios.get("https://api.vschool.io/alexramirez/thing")
            .then(response => this.setState({
                uglyThingsArr: response.data
            }), window.location.reload())
            .catch(error => console.log(error))

        console.log(this.state.uglyThingsArr)
    }

    deletePost = (id) => {
        console.log(id)

        axios.delete(`https://api.vschool.io/alexramirez/thing/${id}`)
            .then(response => console.log(response), window.location.reload())
            .catch(error => console.log(error))

    }

    editPost = (id, title, imgUrl, description) => {
        console.log(id)

        this.setState({
            title: title,
            url: imgUrl,
            description: description,
            id: id,
            showForm: true
        }, function () { console.log(this.state.title, this.state.url, this.state.description) })
    }

    submitEdit = () => {
        let editPost = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.url
        }

        let id = this.state.id

        axios.put(`https://api.vschool.io/alexramirez/thing/${id}`, editPost)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        this.setState({
            title: "",
            url: "",
            description: "",
            id: "",
            showForm: false
        }, function () { window.location.reload() })
    }

    render() {

        return (
            <Provider value={{
                uglyThingsArr: this.state.uglyThingsArr,
                submittedInfo: this.submittedInfo,
                deletePost: this.deletePost,
                editPost: this.editPost
            }}>
                {this.props.children}
                <div className="editFormDiv">
                    <form style={{ display: this.state.showForm ? "block" : "none" }}>
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
                    <button className="editButton" style={{ display: this.state.showForm ? "block" : "none" }} onClick={this.submitEdit}>Submit Edit</button>
                </div>
            </Provider>
        )
    }
}

export { UglyContextProvider, Consumer as UglyContextConsumer }