import React from "react";

const getPersonalData = () => {
  const fName = "GEORGE";
  const lName = "JINGO";
  const photo =
    "https://res.cloudinary.com/wljin/image/upload/v1624307990/personal%20website/profile_suaai9.jpg";

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
