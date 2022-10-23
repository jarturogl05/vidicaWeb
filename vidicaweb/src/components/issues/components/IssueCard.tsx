import React from "react";

import IssueCreditCardIcon from "../../../assets/issue_creditcard_icon.png"
import IssueMoneyIcon from "../../../assets/issue_money_icon.png"
import UserIssueIcon from "../../../assets/user_issue_icon.png"

interface IssuePropI {
    place: string,
    address: string,
    date: Date,
    issueDescription: string,
    status: string,
    type: string,
}

const renderIconIssue: React.FC<String> = (icon: String) => {
  let returnAnswer = <img src={IssueMoneyIcon} />
  switch (icon) {
    case "credit":
      returnAnswer = <img src={IssueCreditCardIcon} />
      break;
    case "user":
      returnAnswer = <img src={UserIssueIcon} />
      break;
    default:
      break;
  }
  return returnAnswer;
}

const renderDate: React.FC<Date> = (date: Date) => {
  return (
    <div>{date.toLocaleString()}</div>
  )
}

const IssueCard: React.FC<IssuePropI> = ({place, address, date, issueDescription, status, type}: IssuePropI) => {
  return (
    <div className="flex flex-row border issue-card-box">
      <div>{renderIconIssue(type)}</div>
      <div className="flex flex-col">
        <div>{place}</div>
        <div>{address}</div>
        <div className="flex flex-row">
          {renderDate(date)}
        </div>
        <div>{issueDescription}</div>
        <div>{status}</div>
        
      </div>
    </div>
  );
}

export default IssueCard;
