import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

//Image
import DefaultImg from "../assets/Sans titre.png"

const Present = () => {
    return (<DefaultTemplate>
        <div className={"d-flex justify-betewn"}>
            <div className="flex-1 dl-flex flex-col">
                <h1 className="mb-1">Arthur Dias</h1>
                <p className="mt-0">060534996</p>
            </div>
            <div style={{backgroundColor: "#EDB88B", position: "relative"}}>
                <img src={DefaultImg}
                     alt="DefaultImage"
                     style={{position: "relative", top: -20, left: -20, width: 200}}/>
            </div>
        </div>
    </DefaultTemplate>)
}

export default Present