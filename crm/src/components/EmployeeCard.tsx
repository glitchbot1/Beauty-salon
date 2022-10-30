import React from "react";

interface EmployeeCardProps{
    employee:any;
}

export function EmployeeCard(props:EmployeeCardProps) {
    const {photo , name , position} = props.employee;
    
  return (
    <div className="employee-card">
      <div className="employee-card__photo">
        <img 
            style={{
                height:200,
                width: 'auto'
            }}
        src={photo} />
      </div>
      <div className="employee-card__name">
      {name}
      </div>
      <p className="employee-card__position"> {position}</p>
      <button >Подробнее</button>
    </div>
  );
}
