import React from "react";

import OptionHeader from "./components/OptionHeader";
import SearchBar from "./components/SearchBar";

import HomeIcon from "../../assets/headericons/home_icon.png";

import FilterIcon from "../../assets/headericons/filter_icon.png";
import EditIcon from "../../assets/headericons/edit_icon.png";
import ExportIcon from "../../assets/headericons/export_icon.png";
import darkIcon from "../../assets/headericons/dark_icon.png";
import SettingsIcon from "../../assets/headericons/edit_icon.png";
import ProfileIcon from "../../assets/headericons/profile_icon.png";

function HeaderBar() {
  return (
    <div className="  px-10 py-2 border-1 header-box">
      <div className="flex flex-row items-center	">
        <img src={HomeIcon} alt="Logo" className="h-[50px]" />
        <div className="font-bold text-4xl text-secondary m-2">INICIO</div>
      </div>

      <div className="font-normal text-1xl  mt-3 ml-2">
        Buscar cajeros por sucursal, ubicación o CR:
      </div>

      <div className="flex flex-row ml-2">
        <div className="flex basis-1/2 mr-8">
          <SearchBar />
        </div>

        <div className="flex flex-row basis-1/4 mx-6">
          <OptionHeader label={"FILTROS"} icon={FilterIcon} />
          <OptionHeader label={"EDITAR"} icon={EditIcon} />
          <OptionHeader label={"EXPLORAR"} icon={ExportIcon} />
        </div>

        <div className="flex flex-row basis-1/4 justify-end	ml-6 " >
          <OptionHeader label={"NOCTURNO"} icon={darkIcon} />
          <OptionHeader label={"AJUSTES"} icon={SettingsIcon} />
          <div className="flex flex-row w-[60px] mb-1">
            <img src={ProfileIcon} className="image_profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
