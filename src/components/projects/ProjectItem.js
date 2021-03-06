// libs
import PropTypes from "prop-types";
import React from "react";

const ProjectItem = ({ title, content, authorFirstName, authorLastName, date }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{title}</span>
      <p>{content}</p>
      <p className="grey-text">
        Posted {date} by {authorFirstName} {authorLastName}
      </p>
    </div>
  </div>
);

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
};

export default ProjectItem;
