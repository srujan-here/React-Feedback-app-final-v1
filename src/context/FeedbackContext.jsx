import { createContext, useState,useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([]);
  const [isloading,setisloding] = useState(true);

  const [feedbackedit, setfeedbackedit] = useState({
    item: {},
    edit: false,
  });

useEffect(() => {
  fetchFeedback();
},[])


const fetchFeedback = async()=>{
  const responce=await fetch(`/feedback?_sort=id&_order=desc`)
  const data= await responce.json();
  setfeedback(data);
  setisloding(false)
}


//Delete Feedback
  const deletefeedback =async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await fetch(`/feedback/${id}`,{method: 'DELETE'})

      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add Feedback
  const addfeedback = async (item) => {
    // item.id = uuidv4();
    const response = await fetch(`/feedback`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item),
    })
  
    const data=await response.json()
    setfeedback([data, ...feedback]);
  };



  const editfeedback = (item) => {
    setfeedbackedit({
      item,
      edit: true,
    });
  };


  //update feedback item

  const updatefeedback = async (id,upditem)=>{
    const response = await fetch(`/feedback/${id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(upditem)
    })

    const data=await response.json()

   setfeedback(
    feedback.map((item) => (item.id === id ? {...item,...data} :item))
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
        isloading,
        updatefeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
