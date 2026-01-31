import "./menu.css";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  BookPlus,
  Boxes,
  User,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "workout", path: "/workout", icon: BookPlus },
  { name: "Inventory", path: "/inventories", icon: Boxes },
  { name: "Profile", path: "/profile", icon: User },
];

export default function Menu() {
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="days-indicator">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri','Sat'].map((day) => (
            <div key={day} className={`day-tag ${day === 'Thu' ? 'current' : ''}`}>
              {day}
            </div>
          ))}
        </div>

        <nav className="glass-menu">
          {menus.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <Icon size={35} />
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}