// same as AppExample3 but different approach
import React from "react";
const AppExample3_2=()=>{
const [title,setTitle]=React.useState("This is title of the page before click");
const clickedHandler=()=>
{
    setTitle("Heading is changed my dear");
}
    return(
    <div>
        <h1>This is heading</h1>
        <Title title={title} headingClicked={clickedHandler} />
    </div>
)
}
const Title=(props)=>{
    const headingClicked=()=>{
        props.headingClicked();
    }
    return(
        <div>
            <h2 onClick={headingClicked}>{props.title}</h2>
        </div>
 
    )
}
export default AppExample3_2;