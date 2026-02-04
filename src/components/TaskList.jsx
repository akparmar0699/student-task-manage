import React from "react";

const TaskList = () => {
  return (
    <div className="task-grid">
      {/* Task Card1*/}
      <div className="task-card" style={{ position: "relative" }}>
        <h3>Complete React Assignment</h3>
        <p>Finish task manager UI and styling</p>

        <div className="task-meta">
          <span>Due: 2026-02-10</span>
          <span className="proiority-badge  priority-high">High</span>
        </div>

        <div className="task-action">
          <button
            className='btn-icon' style={{ background: "#00d2ff" }}
            title='Edit Task'
            >
              ✏️
          </button>


          <button
            className="btn-icon" style={{ background: "#29c96f" }}
            title="Mark Complete"
            >
              ✅
        </button>

          <button
            className="btn-icon"
            style={{ background: "#ff416c" }}
            title="Delete Task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
