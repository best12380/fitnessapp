import React, { useState } from 'react';
import './Workout.css';

const WorkoutManager = () => {
  const [exercises, setExercises] = useState([
    { id: 'A', name: 'Incline Bench Press', sets: '6, 7', weight: '25, 22.5 kg' },
    { id: 'B', name: 'Fly', sets: '8, 5', weight: '50 kg' },
    { id: 'C', name: 'Shoulder Press', sets: '6, 8', weight: '36, 32 kg' },
    { id: 'D', name: 'Machine Row', sets: '8, 8, 7, 7', weight: '25 kg' },
    { id: 'E', name: 'Preacher Curl', sets: '8, 6', weight: '27 kg' },
    { id: 'F', name: 'JM Press', sets: '7, 5', weight: '30 kg' }
  ]);

  const addExercise = () => {
    const nextId = String.fromCharCode(65 + exercises.length);
    const newEx = { 
      id: nextId, 
      name: 'New Exercise', 
      sets: '0, 0',
      weight: '0 kg'
    };
    setExercises([...exercises, newEx]);
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  return (

    <div className="workout-container">
      <main className="main-content">
        <div className="workout-card">
          <div className="card-header">
            <div className="profile-section">
              <div className="profile-badge">PH</div>
              <h2 className="workout-title">UPPER</h2>
            </div>
            <button className="menu-dots">⋮</button>
          </div>

          <button className="start-session-btn">Start Session</button>

          <h3 className="section-title">Comment on Session</h3>

          <div className="exercises-container">
            {exercises.map((ex) => (
              <div key={ex.id} className="exercise-card">
                <div className="exercise-header">
                  <div className="exercise-badge">{ex.id}</div>
                  <div className="exercise-details">
                    <h4 className="exercise-name">{ex.name}</h4>
                    <p className="exercise-stats">{ex.sets} @ {ex.weight}</p>
                  </div>
                </div>
                <button 
                  className="delete-btn" 
                  onClick={() => deleteExercise(ex.id)}
                  aria-label="Delete exercise"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <button className="fab-btn" onClick={addExercise}>
        +
      </button>

      <nav className="bottom-nav">
        <button className="nav-item active">
          <span className="nav-icon">🏋️</span>
          <span className="nav-label">Training</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📊</span>
          <span className="nav-label">History</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📚</span>
          <span className="nav-label">Library</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Me</span>
        </button>
      </nav>
    </div>
  );
};

export default WorkoutManager;