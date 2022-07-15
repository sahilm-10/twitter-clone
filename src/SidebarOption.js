import React from 'react';
import "./SidebarOption.css";

function SidebarOption({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
  );
}

// when you look at side bar it is almost same for all options . So we will create one component and customize it using props -> icon here.
// bem convention -> sidebarOption--active

export default SidebarOption;