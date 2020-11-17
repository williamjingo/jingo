import React from "react";

const getPersonalData = () => {
  const fName = "GEORGE";
  const lName = "JINGO";
  const photo =
    "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  return { fName, lName, photo };
};

const Candidate = () => {
  const { fName, lName, photo } = getPersonalData();

  return (
    <React.Fragment>
      <img src={photo} alt={fName} className="candidate__photo" />
      <div className="candidate__name">
        {fName} {lName}
      </div>
    </React.Fragment>
  );
};

export default Candidate;
