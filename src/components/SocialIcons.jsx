import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const onClickHandler = (social) => {
  let socialLink = "";
  if (social === "twitter") socialLink = "https://twitter.com/williamjingo";
  if (social === "github") socialLink = "https://github.com/williamjingo";
  if (social === "linkedin")
    socialLink = "https://www.linkedin.com/in/william-jingo";

  if (socialLink) return window.open(socialLink, "_blank");

  return;
};

const SocialIcons = () => {
  return (
    <div className="social social__list">
      <FontAwesomeIcon
        icon={faTwitter}
        size="lg"
        className="social__icon"
        onClick={(e) => onClickHandler("twitter")}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="lg"
        className="social__icon"
        onClick={(e) => onClickHandler("linkedin")}
      />
      <FontAwesomeIcon
        icon={faGithub}
        size="lg"
        className="social__icon"
        onClick={(e) => onClickHandler("github")}
      />
    </div>
  );
};

export default SocialIcons;
