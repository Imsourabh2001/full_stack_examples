import React from 'react';
const AppPractice=()=>{
    const companies=['Amazon','Flipkart','Adobe','Microsoft','Google','IBM','Infosis','TCS','City Coperation','Yash Technology'];
    const [showWhat,setShowWhat]=React.useState("");
    const displayItem=(show)=>{
        setShowWhat(show);
    }
    return(
    <div>
        <HeaderComponent />
        <div style={{display:'flex'}}>
        <div style={{marginLeft:'25px',paddingRight:'25px',borderRight:'2px solid black'}}>
            <span style={{backgroundColor:'rebeccapurple',textAlign:'center',color:"white",marginLeft:'10px',padding:'3px'}}>F I L T E R S</span>
            <JobTypeComponent showItem={displayItem}/><hr></hr>
            <SalaryTypeComponent showItem={displayItem}/><hr></hr>
            <CompanyType companies={companies} showItem={displayItem}/><hr></hr>
        </div>
        <div style={{flexGrow:1,paddingLeft:'25px'}}>
            <span style={{backgroundColor:'rebeccapurple',textAlign:'center',color:'white',marginLeft:'10px',padding:'3px'}}>List of Students...</span>
            <ShowSelected show={showWhat} />
            </div>
        </div>
    </div>
);
}
const HeaderComponent=()=>{
    return(
        <div>
            <h2>THis is fun page... You have seen it on E-commerce site
            </h2>
        </div>
    )
}
const JobTypeComponent=({showItem})=>{
    const jobSelected=(ev)=>{
        var jobType=ev.currentTarget.getAttribute("id");
        if(jobType==='I') showItem("Internship");
        else showItem("Full Time");
    }
    return(
        <fieldset>
            <legend>Job Type</legend>
                <input type='checkbox' value='I' onClick={jobSelected} id='I'></input><b>Internship</b><br/>
                <input type='checkBox' value='F' onClick={jobSelected} id='F'></input><b>Full Time</b><br/>
        </fieldset>
    )
}
const SalaryTypeComponent=({showItem})=>{
    return(
        <fieldset>
            <legend>Salary Type</legend>
            <input type='checkBox' value='Y'></input><b>Yearly</b><br></br>
            <input type='checkBox' value='M'></input><b>Monthly</b><br></br>
        </fieldset>
    )
}
const CompanyType=({companies,showItem})=>{
    return(
        <fieldset>
            <legend>Company Type</legend>
            {
            companies.map((company)=>{
                   return( 
                   <span><input type='checkbox'></input><b>{company}</b><br></br></span>
                   )
            })
        }
        </fieldset>
    )
}
const ShowSelected=({show})=>{
    return(
        <div>
            <h1>Selected :{show}</h1>
        </div>
    )
}
export default AppPractice;