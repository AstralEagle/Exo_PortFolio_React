import React from "react";
import {AiOutlineGithub, AiOutlinePhone} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";

const Information = ({nom, prenom, age, tel, email, git}) => {
    return (<div className="flex-1 dl-flex flex-col pr-8">
            <h1 className="mb-1">{prenom} {nom}</h1>
            <p className="secondaryTxt mt-0">{age} ans</p>
            <p className="d-flex align-center">
                <AiOutlinePhone/>
                <span className="ml-2">
                        {tel}
                    </span>
            </p>
            <p className="d-flex align-center">
                <HiOutlineMail/>
                <span className="ml-2">
                        {email}
                    </span>
            </p>
            <p className="d-flex align-center">
                <AiOutlineGithub/>
                <span className="ml-2">
                        {git}
                    </span>
            </p>
            <p>Je suis un développeur fullstack passionné par la création d'applications web. Mon expertise se situe
                principalement dans le développement avec les technologies React et Express. Travailler avec ces deux
                frameworks me permet de concevoir des applications hautement interactives et performantes.</p>

        </div>
    )

}

export default Information