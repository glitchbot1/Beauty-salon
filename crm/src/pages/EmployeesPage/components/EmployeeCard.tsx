  import React from "react";
import {StaffDto} from "../../../common/interfaces/EmployeesInterfaces";

interface EmployeeCardProps{
    employee:StaffDto;
}

export function EmployeeCard(props:EmployeeCardProps) {
    const {photo , fullName , position} = props.employee;
    
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
      {fullName}
      </div>
      <p className="employee-card__position"> {position}</p>
      <button >Подробнее</button>
    </div>
  );
}
