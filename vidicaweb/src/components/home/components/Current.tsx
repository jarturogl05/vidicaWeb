import React from "react";

import PeopleIcon from "../../../assets/people.png";
import IssueMoney from "../../../assets/issue_money_icon.png";
import MaintenanceIcon from "../../../assets/maintenance_icon.png";
import WarningIcon from "../../../assets/warning_icon.png";


interface CurrentPropsI {
    text: string
}

function Current({text}: CurrentPropsI) {
  return (
    <div className="flex flex-col info_box align-middle items-center px-8	">
      <div className="font-bold text-2xl text-secondary h-[110px] w-[200px] ">{text}</div>

      <div className="flex flex-row items-center		">
        <img src={PeopleIcon} alt="Logo" className="mx-2 my-2 h-[40px] w-[40px]" />
        <div className="font-bold text-2xl text-primary mx-2">10</div>
        <div className="text-lg">descripcion</div>
      </div>

      <div className="flex flex-row items-center	">
        <img src={IssueMoney} alt="Logo" className="mx-2 my-2  h-[40px] w-[40px] " />
        <div className="font-bold text-2xl text-primary mx-2">23</div>
        <div className="text-lg">descripcion</div>
      </div>

      <div className="flex flex-row items-center	content-center	">
        <img src={MaintenanceIcon} alt="Logo" className="mx-2 my-2  h-[40px] w-[40px]" />
        <div className="font-bold text-2xl text-primary mx-2">23</div>
        <div className="text-lg">descripcion</div>
      </div>

      <div className="flex flex-row items-center	">
        <img src={WarningIcon} alt="Logo" className="mx-2 my-2  h-[40px] w-[40px]" />
        <div className="font-bold text-2xl text-primary mx-2">23</div>
        <div className="text-lg">descripcion</div>
      </div>
    </div>
  );
}

export default Current;
