import React from "react";

const ProjectItem = ({item}) => {
    return (
        <div className="mt-8 d-flex">
            <div className="d-flex flex-col">
                <div className="d-flex align-center">
                    <h4 className="mb-0 mt-0">{item.name}</h4>
                    {item.techno.map((x, i) => (
                        <div style={{backgroundColor: "#FAD8D6", fontSize: 10}} className="pr-2 pl-2 pt-1 pb-1 ml-2 radius-8">
                            {x}
                        </div>
                    ))}
                </div>
                <p style={{color: "#858585"}}>{item.desc}</p>
            </div>
            {item.img && (
                <img className="projectImage" src={item.img} alt="Project image"/>
            )}
        </div>
    )
}

export default ProjectItem;