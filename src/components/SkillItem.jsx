import React, {useState} from "react";
import {FaChevronDown} from "react-icons/fa";

const SkillItem = ({item}) => {
    const [isViewMore, setIsViewMore] = useState(false);

    return (
        <div>
            <div className="d-flex justify-betewn">
                <span>{item.name}</span>
                {item.subModule && (
                    <FaChevronDown
                        style={isViewMore && {transform: "rotate(180deg)"}}
                        onClick={() => {
                            setIsViewMore(val => !val)
                        }}/>
                )}
            </div>
            {isViewMore && (
                <ul>
                    {item.subModule.map((x, i) => (
                            <li style={{margin: "5px 0"}} key={i}>
                                {x}
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>

    )
}

export default SkillItem;