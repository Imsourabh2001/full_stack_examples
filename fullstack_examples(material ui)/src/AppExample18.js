import React from "react";
const getPlacements=()=>{
    const promise=new Promise((resolve)=>{
        fetch("/placements").then((response)=>{
            return response.json();
        }).then((students)=>{
            resolve(students);
        });
    });
    return promise;
}
const AppExample18=()=>{
    const [activeState,setActiveState]=React.useState("view");
    const [students,setStudents]=React.useState([]);
    const toolBarItemSelected=(item)=>{
        if(item==="A") setActiveState("add");
        if(item==="C") setActiveState("view");
    }
    React.useEffect(()=>{
        getPlacements().then((s)=>{
            setStudents(s);
        });
    },[])
    return(
        <div>
            <h1>Welcome to site</h1>
            <ToolBarComponent mode={activeState} toolBarItemSelected={toolBarItemSelected}/>
            {activeState==="view" && <StudentViewComponent students={students} />}
            {activeState==="add"&&<StudentAddComponent />}
        </div>
    )
}
const ToolBarComponent=(props)=>{
    const clickHandler=(ev)=>{
        props.toolBarItemSelected(ev.target.getAttribute("id"));
    }
    return(
        <div>
            <hr/>
            {props.mode==="view"&&<button type="button" onClick={clickHandler} id='A'>Add</button>}
            {props.mode==="add"&&<button type="button" onClick={clickHandler} id='C'>Cancel</button>}
            <hr/>
        </div>
    )
}
const StudentViewComponent=(props)=>{
    return(
        <div>
            <h1>List of Students</h1>
            {
                props.students.map((student)=>{
                    return(
                        <div key={student.id}>
                           <b> Name : </b>{student.name}<br/>
                           <b> Placement Type : </b>{student.placementType}<br/>
                           <b> Company : </b>{student.company}<br/>
                           <b> Salary : </b>{student.salary}<br/><hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}
const StudentAddComponent=()=>{
    const [id,setId]=React.useState(0);
    const [name,setName]=React.useState("");
    const [placementType,setPlacementType]=React.useState("F");
    const [company,setCompany]=React.useState("");
    const [salary,setSalary]=React.useState(0);
    const [salaryType,setSalaryType]=React.useState("Y");
    const [fullTimeChecked,setFullTimeChecked]=React.useState("checked");
    const [internshipChecked,setInternshipChecked]=React.useState("");

    const idChanged=(ev)=>{
        setId(ev.currentTarget.value);
    }
    const nameChanged=(ev)=>{
        setName(ev.currentTarget.value);
    }
    const companyChanged=(ev)=>{
        setCompany(ev.currentTarget.value);
    }
    const salaryChanged=(ev)=>{
        setSalary(ev.currentTarget.value);
    }
    const salaryTypeChanged=(ev)=>{
        setSalaryType(ev.target.value);
    }
    const placementChanged=(ev)=>{
        if(ev.currentTarget.value==='F') 
        {
            setPlacementType("F");
            setFullTimeChecked("checked");
            setInternshipChecked("");
        }
        if(ev.currentTarget.value==='I') 
        {
            setPlacementType("I");
            setInternshipChecked("checked");
            setFullTimeChecked("");
        }
    }
    const buttonClickedHandler=()=>{
        
    }

    return(
        <div>
            <label htmlFor="id">Id. </label>
            <input type="number" id="id" onChange={idChanged} value={id}></input><br></br>

            <label htmlFor="name">Name </label>
            <input type="text" id="name" onChange={nameChanged} value={name}></input><br></br>

            Placement type
            <input type="radio" name="placementType" id="fullTime" checked={fullTimeChecked} value='F' onChange={placementChanged}></input>Full time
            <input type="radio" name="placementType" id="internship" checked={internshipChecked} value='I' onChange={placementChanged}></input>Internship<br></br>

            <label htmlFor="company">Company </label>
            <input type="text" id="company" onChange={companyChanged} value={company}></input><br></br>

            <label htmlFor="salary">Salary </label>
            <input type="number" id="salary" onChange={salaryChanged} value={salary}></input>

            <select id='salaryType' value={salaryType} onChange={salaryTypeChanged}>
            <option value='Y'>per year</option>
            <option value="M">per month</option>
            </select><br></br>
            <button type="button"onClick={buttonClickedHandler}> Add </button>
        </div>
    )
}
export default AppExample18;