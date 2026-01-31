import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      
      {/* --- ฝั่งซ้าย (Left Column) --- */}
      <div className="left-column">
        
        {/* Container: Weight Progress Chart */}
        <section className="container weight-progress">
          <div className="container-header">
            <h3>Weight Progress</h3>
            <span className="badge">120% of goal</span>
          </div>
          <div className="chart-area">
            {/* จำลองจุด Popup ในกราฟ */}
            <div className="chart-tooltip">
              <strong>65.0 kg</strong>
              <span>Dec 28, 2025</span>
            </div>
            <div className="graph-line-mockup"></div>
          </div>
        </section>

        {/* Container: Macros (Protein, Carb, Fat) */}
        <section className="macros-grid">
          <div className="macro-card">
            <span className="macro-value">60/120g</span>
            <div className="macro-icon">🥩</div>
            <span className="macro-label">Protein</span>
          </div>
          <div className="macro-card">
            <span className="macro-value">120/270g</span>
            <div className="macro-icon">🌾</div>
            <span className="macro-label">Carb</span>
          </div>
          <div className="macro-card">
            <span className="macro-value">30/65g</span>
            <div className="macro-icon">🥓</div>
            <span className="macro-label">Fat</span>
          </div>
        </section>
      </div>

      {/* --- ฝั่งขวา (Right Column) --- */}
      <div className="right-column">
        
        <div className="upper-stats">
          {/* Container: Your Weight */}
          <section className="container weight-status">
            <h3>Your Weight</h3>
            <div className="weight-display">60.5 <small>kg</small></div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '65%' }}></div>
            </div>
            <span className="goal-text">GOAL 70 kg</span>
          </section>

          {/* Container: Day Streak */}
          <section className="container streak-status">
            <div className="streak-header">
              <span className="fire-icon">🔥 183</span>
              <p>Day Streak</p>
            </div>
            <div className="streak-dots">
              {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
                <div key={i} className="dot completed"></div>
              ))}
              <div className="dot"></div> {/* วันที่ยังไม่เสร็จ */}
            </div>
            <div className="streak-labels">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
          </section>
        </div>

        {/* Container: Daily Average Calories */}
        <section className="container calories-avg">
          <h3>Daily Average Calories</h3>
          <div className="calories-content">
            <div className="cal-main">
              <span className="cal-number">2680</span>
              <span className="cal-unit">cal 20% ↗</span>
            </div>
            <div className="mini-graph-mockup"></div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Dashboard;