import React from "react";


interface IssuePropI {
    place: string,
    address: string,
    time: string,
    date: string,
    issueDescription: string,
    status: string
    icon: string,
}

function IssueCard() {
  return (
    <div className="flex flex-row border  issue-card-box">
      <div>icon</div>
      <div className="flex flex-col">
        <div>Chedrahui</div>
        <div>direccion</div>
        <div>direccion</div>
        <div className="flex flex-row">
          <div>hora</div>
          <div>fecha</div>
        </div>
        <div>FALTA DE EFECTIVO</div>
        
      </div>
    </div>
  );
}

export default IssueCard;
