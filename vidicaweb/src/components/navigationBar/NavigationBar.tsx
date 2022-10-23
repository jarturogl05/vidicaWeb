import React from "react";
import MenuOption from "./components/MenuOption";

import HomeIcon from "../../assets/home_icon.png";
import StatisticsIcon from "../../assets/statistics_icon.png";
import PredictionsIcon from "../../assets/predictions_icon.png";
import MaintenanceIcon from "../../assets/maintenance_icon.png";
import AtmIcon from "../../assets/atm_icon.png";
import IssuesIcon from "../../assets/issues_icon.png";
import OpinionsIcon from "../../assets/opinions_icon.png";

import Logo from "../../assets/logo.png";

const menuOptionList = [
  {
    label: "Inicio",
    icon: HomeIcon,
    route: "/",
  },
  {
    label: "Estadísticas",
    icon: StatisticsIcon,
    route: "/",
  },
  {
    label: "Predicciones",
    icon: PredictionsIcon,
    route: "/",
  },
  {
    label: "Mantenimiento",
    icon: MaintenanceIcon,
    route: "/",
  },
  {
    label: "Cajeros",
    icon: AtmIcon,
    route: "/",
  },
  {
    label: "Reporte de fallas",
    icon: IssuesIcon,
    route: "/",
  },
  {
    label: "Opiniones",
    icon: OpinionsIcon,
    route: "/",
  },
];

function NavigationBar() {
  return (
    <div className="overflow-auto	 flex flex-col  navigation-bar-box">
        <div className="py-8 flex justify-center">
        <img src={Logo} alt="Logo" className='h-[100px]' />

        </div>

      {menuOptionList.map((option) => (
        <MenuOption
          label={option.label}
          icon={option.icon}
          route={option.route}
        />
      ))}

      {/* <MenuOption/> */}
    </div>
  );
}

export default NavigationBar;
