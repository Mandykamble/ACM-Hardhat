
import './App.css';
import Navbar from './components/Navbar/navbar.js';
import Homepage from './components/Homepage/homepage.js';
import About from './components/About/about.js';
import Loginemp from './components/Login/loginemp.js';
import Loginboss from './components/Login/loginboss.js';
import Register from './components/Register/register.js';
import Select from './components/Selectlogin/select.js';
import Post from './components/Post_a_job/postajob.js';
import Submission from './components/Submission/submission.js';
import Job from './components/Job/job.js';
import Jobdetails from './components/Jobdetails/jobdetails.js';
import Cardasj from './components/Job/Cardasj';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route exact path="/" element={<Homepage />} />
       <Route exact path="homepage" element={<Homepage />} />
       <Route exact path="about" element={<About />} />
       <Route exact path="select" element={<Select />} />
       <Route exact path="postajob" element={<Post />} />
       <Route exact path="register" element={<Register />} />
       <Route exact path="loginemp" element={<Loginemp />} />
       <Route exact path="loginboss" element={<Loginboss />} />
       <Route exact path="job" element={<Job />} />
       <Route exact path="jobdetails" element={<Jobdetails />} />
       <Route exact path="submission" element={<Submission />} />
   </Routes>
   {/* <Job/> */}
   {/* <Jobdetails /> */}
   
 
   
   
   </>
   
    
  );
}

export default App;
