import React from "react";
const getPlacements=()=>{
    const promise=new Promise((resolve)=>{
        fetch("/placements").then((response)=>{
            return response.json();
        }).then((student)=>{

            resolve(student);
        });
    });
    return promise;
}
const AppExample17=()=>{
    const [activeMode,setActiveMode]=React.useState("view");
    const [students,setStudents]=React.useState([]);

    React.useEffect(()=>{
        getPlacements().then((s)=>{
            setStudents(s);
        });
    },[])

    const toolBarItemSelected=(item)=>{
        if(item==='A')setActiveMode("add");
        if(item==='C')setActiveMode("view");
    }
    return(
        <div>
            <h1>Placements list</h1>
            <ToolBarComponent mode={activeMode} toolBarItemSelected={toolBarItemSelected}/>
            {activeMode==="view" &&<StudentViewComponent students={students} />}
            {activeMode==="add" && <StudentAddComponent />}
        </div>
    )
}
const ToolBarComponent=(props)=>{
    const buttonClicked=(ev)=>{
        var button=ev.currentTarget.getAttribute("id");
        props.toolBarItemSelected(button);
    }

    return(
        <div>
            <hr/>
            {props.mode==="view" &&<button type="button" onClick={buttonClicked} id="A">Add</button>}
            {props.mode==="add" &&<button type='button' onClick={buttonClicked} id="C">Cancel</button>}
            <hr/>
        </div>
    )
}
const StudentViewComponent=({students})=>{
    return(
        <div>
            <h1>Student list</h1>
            <hr></hr>
            {
                students.map((student)=>{
                    return(
                        <div>
                           <b> Name:</b> {student.name}<br></br>

                           <b> Placement Type:</b> {student.placementType}<br></br>
                           <b> Company:</b> {student.company}<br></br>
                           <b> Salary:</b> {student.salary}<br></br>
 <hr></hr>
                         </div>   
                    )
                })
            }
        </div>
    )
}
const StudentAddComponent=()=>{
    return(
        <div>
            Student Add Form.
        </div>
    )
}
export default AppExample17;