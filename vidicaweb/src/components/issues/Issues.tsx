import React from "react";

import HeaderIcon from "../../assets/headericons/filter_icon.png"
import IssueCard from "./components/IssueCard";

import FlagIcon from "../../assets/flag.png";

import IssueCreditCardIcon from "../../assets/issue_creditcard_icon.png"
import IssueMoneyIcon from "../../assets/issue_money_icon.png"
import UserIssueIcon from "../../assets/user_issue_icon.png"
import { Button } from "../buttons/Button";

const date = new Date();
const issues = [
  {
    place: "Xalapa",
    address: "Xalapa",
    date: date,
    issueDescription: "Solo se rompió",
    status: "open",
    type: "cash"
  },
  {
    place: "Xalapa",
    address: "Xalapa",
    date: date,
    issueDescription: "TARJETA ATORADA",
    status: "open",
    type: "credit"
  },
  {
    place: "Xalapa",
    address: "Xalapa",
    date: date,
    issueDescription: "FALTA DE EFECTIVO",
    status: "open",
    type: "user"
  },  {
    place: "Xalapa",
    address: "Xalapa",
    date: date,
    issueDescription: "FALTA DE EFECTIVO",
    status: "open",
    type: "cash"
  },

]


function Issues() {
  return (
    <div className="flex flex-col h-screen issues-box">
      <div className="flex flex-row m-10 px-5  ">
        <button className="pr-10"><img src={FlagIcon} /> Marcar</button>
        <div className="font-bold text-2xl text-primary">INCIDENCIAS</div>
        <button className="px-10"><img src={HeaderIcon} /> Filtrar</button>
      </div>
      {issues.map((issue) => (
        <IssueCard
          place={issue.place}
          address={issue.address}
          date={issue.date}
          issueDescription={issue.issueDescription}
          status={issue.status}
          type={issue.type}
        />
      ))}
    </div>
  );
}

export default Issues;
