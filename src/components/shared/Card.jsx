import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: "true",
};

export default Card;
