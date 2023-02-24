import React from "react";
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar h-full bg-white overflow-y-scroll">
      <div className="sidebar__categories w-full flex mb-4 mt-4">
        <div className="sidebar__category flex items-center">
          <i className="material-icons">home</i>
          <span>Home</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">local_fire_department</i>
          <span>Trending</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">subscriptions</i>
          <span>Subcriptions</span>
        </div>
      </div>
      <hr />
      <div className="sidebar__categories">
        <div className="sidebar__category">
          <i className="material-icons">library_add_check</i>
          <span>Library</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">history</i>
          <span>History</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">play_arrow</i>
          <span>Your Videos</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">watch_later</i>
          <span>Watch Later</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">thumb_up</i>
          <span>Liked Videos</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
