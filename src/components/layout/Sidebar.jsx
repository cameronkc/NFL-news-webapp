import React from "react";
import { FaInbox, FaSun, FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function Sidebar() {
  return (
    <div class="square-lg shadow bg-base-100 drawer drawer-start h-full w-80">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <ul class="menu p-4 overflow-y-auto w-70 bg-base-200 text-base-content">
          <li>
            <a>
              <span>
                <FaInbox />
              </span>
              &nbsp; Inbox
            </a>
          </li>
          <li>
            <a>
              <FaCalendarDay />
              &nbsp; Today
            </a>
          </li>
          <li>
            <a>
              <FaCalendarAlt />
              &nbsp; Next 7 Days
            </a>
          </li>
          <div class="dropdown">
            <div tabindex="0" class="m-1 btn">
              <FaChevronDown />
              &nbsp;Projects
            </div>
            <ul>Project Content Here</ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
