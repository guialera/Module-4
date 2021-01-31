import React from "react"

function Services() {
    return (
        <div>
            <h1 className="servicesHeader">Our Services</h1>
            <p className="servicesText">What do we provide?</p>
            <div className="servicesDiv">
                <div>
                    <img className="servicesImgOne" src="https://mfiles.alphacoders.com/719/thumb-1920-719760.png" />
                    <p className="servicesText">We remove tough clogs in drains!</p>
                </div>
                <div className="servicesDivTwo">
                    <img src="https://3dprint.com/wp-content/uploads/2015/07/warp4.gif" />
                    <p className="servicesText">We also perform routine cleaning of pipes!</p>
                </div>
                <div>
                    <img className="servicesImgThree" src="https://i.dlpng.com/static/png/6729112_preview.png" />
                    <p className="servicesText">We also specialize in the contruction of plumbing systems!</p>
                </div>
            </div >
        </div >
    )
}

export default Services