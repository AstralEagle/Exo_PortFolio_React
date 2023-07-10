import React from 'react';
import Chips from './Chips';

const ProjectItem = ({ item }) => {
  return (
    <div className="mt-8 d-flex">
      <div className="d-flex flex-col">
        <div className="d-flex align-center">
          <h4 className="mb-0 mt-0">{item.name}</h4>
          {item.techno.map((x, i) => (
            <Chips name={x} key={i} />
          ))}
        </div>
        <p className="secondaryTxt">{item.desc}</p>
      </div>
      {item.img && (
        <img className="projectImage" src={item.img} alt="Project image" />
      )}
    </div>
  );
};

export default ProjectItem;
