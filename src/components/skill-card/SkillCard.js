import React from "react";

export const SkillCard = (props) => {
  return (
    <div className={props.skillDivClassName}>
      <img
        src={props.image}
        height="42"
        width="42"
        alt={props.imageAlt}
        className={props.imageClassName}
      />
      <span className={props.skillSpanClassName}>{props.skillName}</span>
    </div>
  );
};
