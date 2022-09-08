import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Feedbackform from "./components/Feedbackform";
import About from './Pages/About';
import AboutIconlink from './components/AboutIconlink';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
    <Router>
   
    
      <Header />

      <div className="container">
      <Routes>
      <Route exact path="/" element={
        <>
         <Feedbackform  />
      <FeedbackStats />
      <FeedbackList />
      

        </>
      }>
     
      {/* <About /> */}
      </Route>
      <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
    <AboutIconlink />
    </Router>
</FeedbackProvider>
  
   
  );
}

export default App;
