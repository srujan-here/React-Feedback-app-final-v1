import React from "react";
import PropTypes from "prop-types";
function Header({ name, bgcolor, textColor }) {
  const headerStyles = {
    backgroundColor: "#000000",
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{name}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  name: "Feedback-UI",
  bgColor: "#000000",
  textColor: "#ff6a95",
};

Header.propTypes = {
  name: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
