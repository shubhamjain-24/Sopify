
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router,Switch,Route,Routes  } from 'react-router-dom'
import Plus from './Components/Plus/Plus';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import LOR from './Pages/LOR/LOR'
import SOP from './Pages/SOP/SOP'
import Assignment  from './Pages/Assignments/Assignment'
import Blogs from './Pages/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/About_Us';
// import ContactUs from './Pages/ContactUs/ContactUs'
import {blogList} from '../src/Config/data'
import BlogPage from './Pages/Blogs/Blogpage/BlogPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    {/* <Navbar/>  */}
    {/* <Home/> */}
    {/* <Blogs blogs={blogList}/> */}
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/sop" element={<SOP/>}/>
        <Route exact path="/lor" element={<LOR/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/assignment" element={<Assignment/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/contactus" element={<ContactUs/>}/>
        <Route path="/" element={<Blogs blogs={blogList}/>}/>
        <Route path="/blog/:id" element={<BlogPage/>}/>
      </Routes>
    </Router>
    {/* <Plus/> */}
    {/* RESPONSIVE DONE */}
    {/* <LOR/> */}
    {/* <SOP/> */}
    {/* <Services/> */}
    {/* <Assignment/> */}
    {/* <AboutUs/> */}
    {/* <ContactUs/> */}
    </>
    
  );
}

export default App;
