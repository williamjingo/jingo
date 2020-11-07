import React from "react";

const InvertedName = ({ firstName, lastName }) => {
  return (
    <div className="name">
      {lastName} {firstName}
    </div>
  );
};

export default InvertedName;
