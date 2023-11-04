import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

const AppExample27=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/" Component={HomeComponent}></Route>
        <Route exact path="/courses" Component={CoursesComponent}></Route>
        <Route exact path="/contactUs" Component={ContactUsComponent}></Route>
        </Routes>
        </BrowserRouter>
    )
}
const HomeComponent=()=>{
    return(
        <div>
            <h1>Dubey Machines</h1>
            <Link to='/courses'>Courses</Link><br></br>
            <Link to='/contactUs'>Contact Us</Link>
        </div>
    )
}
const CoursesComponent=()=>{
    return(
        <div>
            <h1>Thinking Machines</h1>
            <h3>Courses</h3>
            <Link to='/'>Home</Link>
        </div>
    )
}
const ContactUsComponent=()=>{
    return(
        <div>
            <h1>Thinking Machines</h1>
            <h3>Contact Us</h3>
            <Link to='/'>Home</Link>
        </div>
    )
}
export default AppExample27;