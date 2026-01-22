import "./dashboard.css";
import { useState } from "react";

export default function Dashboard() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const menus = [
        "Dashboard",
        "Orders",
        "Inventory",
        "Deliveries",
        "Customers",
        "Reports & Analytics",
        "Settings",
    ];
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">StockMage</h2>
        <ul className="menu">
        {menus.map((menu) => (
          <li
            key={menu}
            className={activeMenu === menu ? "active" : "inactive"}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </li>
        ))}
      </ul>

        <div className="upgrade">
          <p>Upgrade to Pro</p>
          <button>Upgrade</button>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        {/* Header */}
        <header className="header">
          <input placeholder="Search something here..." />
          <div className="profile">Pas Vejchanchai</div>
        </header>

        <h1>Deliveries</h1>

        {/* Stat cards */}
        <section className="stats">
          <Stat title="Total Delivered" value="200,913" trend="+2.08%" />
          <Stat title="On Delivery" value="5,290" trend="-11.08%" />
          <Stat title="Cancel Delivery" value="2,220" trend="+10.08%" />
          <Stat title="Return Delivery" value="4,495" trend="-8.08%" />
        </section>

        {/* Content */}
        <section className="grid">
          <div className="card large">
            <h3>Shipment analytics</h3>
            <div className="chart-placeholder">📊 Chart Area</div>
          </div>

          <div className="card">
            <h3>Live Tracking Delivery</h3>
            <div className="map-placeholder">🗺 Map</div>
          </div>

          <div className="card">
            <h3>Shipping Revenue</h3>
            <p className="revenue">$20,285.43</p>
          </div>
        </section>

        {/* Table */}
        <section className="table-card">
          <h3>Shipments Activities</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Category</th>
                <th>Shipper Date</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Weight</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#JT-938-424</td>
                <td>Electronics</td>
                <td>08/07/2024</td>
                <td>California</td>
                <td>New York</td>
                <td>12.3 Kg</td>
                <td className="delivered">Delivered</td>
              </tr>
              <tr>
                <td>#JT-234-653</td>
                <td>Toys & Game</td>
                <td>10/07/2024</td>
                <td>San Francisco</td>
                <td>California</td>
                <td>24.5 Kg</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function Stat({ title, value, trend }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <span>{trend} vs last month</span>
    </div>
  );
}