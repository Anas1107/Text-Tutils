import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

let name = "<b>Harry </b>";

function App() {
 const [alert, setAlert] = useState(null);

 const showAlert = (message, type) => {
   setAlert({
     msg: message,
     type: type
   });
 }

 return (
   <>
 
       <Navbar title="Textutils" />
       <Alert alert='This is alert' />
       <div className="container my-3">
         {/* <Routes> */}
           {/* <Route exact path="/about" element={<About />} /> */}
           <TextForm heading="Enter the text to analyze" />
           {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" />} /> */}
         {/* </Routes> */}

       </div>
  
   </>
 );
}

export default App;
