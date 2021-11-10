import React from "react";
import "./SidebarRow.css";
function SidebarRow({ title, Icon }) {
  return (
    <div className="sidebarRow">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}
export default SidebarRow;