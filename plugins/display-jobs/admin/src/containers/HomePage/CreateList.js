import React from "react";

function CreateList(props) {
  return (
    <div>
      <h1>{props.Job_Title}</h1>
      <h1>{props.job_guidelines}</h1>
      <h1>{props.assigned_clent}</h1>
      <h1>{props.assigned_consultant}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

export default CreateList;