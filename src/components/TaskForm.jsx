import React, { useState } from "react";

const TaskForm = ({ addTask }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const [errors, setErrors] = useState({});

  // INPUT CHANGE
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // VALIDATE
  const validate = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = "Task title is required";
    }
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }
    if (!formData.priority.trim()) {
      errors.priority = "Priority is required";
    }
    if (!formData.dueDate.trim()) {
      errors.dueDate = "Due date is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    addTask(formData);   // send data to Dashboard
    console.log("Form Data:", formData);

    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
    });
  };

  // CLEAR FORM
  const handleClear = () => {
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
    });
    setErrors({});
  };

  return (
    <div className="add-task-card">

      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>

        {/* TITLE */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            onChange={handleInputChange}
            value={formData.title}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        {/* DESCRIPTION */}
        <div>
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            onChange={handleInputChange}
            value={formData.description}
          />
          {errors.description && (
            <span className="error-msg">{errors.description}</span>
          )}
        </div>

        {/* DUE DATE */}
        <div>
          <input
            type="date"
            name="dueDate"
            onChange={handleInputChange}
            value={formData.dueDate}
          />
          {errors.dueDate && <span className="error-msg">{errors.dueDate}</span>}
        </div>

        {/* PRIORITY */}
        <div>
          <select
            name="priority"
            onChange={handleInputChange}
            value={formData.priority}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          {errors.priority && (
            <span className="error-msg">{errors.priority}</span>
          )}
        </div>

        {/* BUTTONS */}
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Add Task
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

      </form>
    </div>
  );
};

export default TaskForm;