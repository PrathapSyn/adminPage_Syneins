import React from "react";
import SideNavBar from "./NavigationBar/SideNavBar";
import TopNavigation2 from "./NavigationBar/TopNavigation2";
import { useDispatch, useSelector } from "react-redux";

export default function Index(props) {

  const report = useSelector((state) => state.Report);
  return (
    <>
  
      <div>
        <TopNavigation2 />
      </div>

      <div>
        <SideNavBar />
      </div>
     
    </>
  );
}
