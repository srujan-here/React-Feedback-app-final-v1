import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "srujan Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 2,
      rating: 9,
      text: "siri Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ]);

  const [feedbackedit, setfeedbackedit] = useState({
    item: {},
    edit: false,
  });

  const deletefeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addfeedback = (item) => {
    item.id = uuidv4();
    setfeedback([item, ...feedback]);
  };

  const editfeedback = (item) => {
    setfeedbackedit({
      item,
      edit: true,
    });
  };


  //update feedback item

  const updatefeedback = (id,upditem)=>{
   setfeedback(
    feedback.map((item) => (item.id === id ? {...item,...upditem} :item))
   )

  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deletefeedback,
        addfeedback,
        editfeedback,
        feedbackedit,
        updatefeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
