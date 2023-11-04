import React from 'react'
const AppExample16=()=>{
    const [activeMode,setActiveMode]=React.useState("view");
    const toolBarItemSelected=(item)=>{
        if(item=='A') setActiveMode("add");
        if(item=='C') setActiveMode("view");
    }
return(
    <div>
        <h1>Welcome to site </h1>
        <ToolBarComponent mode={activeMode} toolBarItemSelected={toolBarItemSelected}/>
        {activeMode==="view" && <StudentsViewComponent />}
        {activeMode==="add" && <StudentsAddComponent />}
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
            {props.mode==="view" && <button type='button' onClick={buttonClicked} id='A'>Add</button>}
            {props.mode==="add" && <button type='button' onClick={buttonClicked} id='C'>Cancel</button>}
            <hr/>
        </div>
    )
}
const StudentsViewComponent=()=>{
    return(
        <div>
            Student list.
        </div>
    )
}
const StudentsAddComponent=()=>{
    return(
        <div>
            Student add form.
        </div>
    )
}
export default AppExample16;