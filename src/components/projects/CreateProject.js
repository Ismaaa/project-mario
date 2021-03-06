/* eslint-disable jsx-a11y/label-has-associated-control */

// libs
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { createProject } from "../../store/actions/projectActions";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProject({
        title,
        content,
      })
    );
    history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create a project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={handleTitleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            name="content"
            id="content"
            className="materialize-textarea"
            value={content}
            onChange={handleContentChange}
          />
        </div>

        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
