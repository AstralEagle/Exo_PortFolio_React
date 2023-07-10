import React from 'react';

const SkillProgressItem = ({ item }) => {
  return (
    <div className="mt-6">
      <h4>{item.title}</h4>
      <div className="ml-6">
        {item.techno.map((x, i) => (
          <span key={i} className="mr-3">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillProgressItem;
