import React from "react";
import HeaderBar from "../headerBar/HeaderBar";
import Issues from "../issues/Issues";
import MapView from "../map/Map";
import NavigationBar from "../navigationBar/NavigationBar";

function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row">
      <NavigationBar />
      <div className="flex flex-col w-screen">
        <HeaderBar />
        <div className="flex flex-row">
          <div className="flex basis-3/4">
            <MapView atms={[]}
                    currentLocation={{latitude: 19.42830985644588, longitude: -99.09717858496306}}
                    totalResults={0} /> 
          </div>
          <div className="flex basis-1/4">
            <Issues />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
