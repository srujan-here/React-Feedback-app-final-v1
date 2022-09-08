import React from "react";
import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext";


function FeedbackStats() {
  const {feedback}= useContext(FeedbackContext)


  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>

      <h4>Average Rating:{avg / feedback.length}</h4>
    </div>
  );
}

export default FeedbackStats;
