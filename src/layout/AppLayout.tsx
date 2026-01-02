import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="">
      <Outlet />
      {/* 
      <div className="flex md:flex-row flex-col items-start">
        <SideBar />
        <Outlet />
      </div> */}
    </div>
  );
}

export default AppLayout;
