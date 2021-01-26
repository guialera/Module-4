import React from "react"

import { UglyContextConsumer } from "./uglyContext"

function Ugly() {
    return (
        <UglyContextConsumer>
            {list => (list.uglyThingsArr.map(each => {
                return (
                    <div key={each._id} className="uglyImageDiv">
                        <p className="title">Title: {each.title}</p>
                        <img src={each.imgUrl} width="500px" height="500px" />
                        <p className="description">Description: {each.description}</p>
                        <button onClick={() => list.deletePost(each._id)}>Delete Post</button>
                        <button onClick={() => list.editPost(each._id, each.title, each.imgUrl, each.description)}>Edit Post</button>
                    </div>

                )
            })
            )}
        </UglyContextConsumer>
    )
}

export default Ugly 