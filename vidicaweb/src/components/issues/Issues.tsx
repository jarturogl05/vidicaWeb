import React from "react";

import HeaderIcon from "../../assets/headericons/filter_icon.png"
import IssueCard from "./components/IssueCard";

import FlagIcon from "../../assets/flag.png";

import IssueCreditCardIcon from "../../assets/issue_creditcard_icon.png"
import IssueMoneyIcon from "../../assets/issue_money_icon.png"
import UserIssueIcon from "../../assets/user_issue_icon.png"




function Issues() {
  return (
    <div className="flex flex-col h-screen issues-box">

      <div className="flex flex-row m-10 px-5  ">
        <img src={FlagIcon} className="pr-10" />
        <div className="font-bold text-2xl text-primary">INCIDENCIAS</div>
        <img src={HeaderIcon} className="px-10" />
      </div>

      <IssueCard/>
      <IssueCard/>
      <IssueCard/>

    </div>
  );
}

export default Issues;
