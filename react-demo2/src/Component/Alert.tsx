import React from "react";

interface Props {
  alertText: String;
  color: String;
}

const Alert = ({ alertText, color }: Props) => {
  return (
    <div>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
        <strong>{alertText}</strong> {color}
      </div>
    </div>
  );
};

export default Alert;
