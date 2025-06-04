
import React from 'react';

const Skill = ({ label, percent, className }) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${className}`}
          role="progressbar"
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Skill;
