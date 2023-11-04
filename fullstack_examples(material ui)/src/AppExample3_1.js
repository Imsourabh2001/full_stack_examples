import React from 'react';
function AppExample3_1(){
    const [title,setTitle]=React.useState("First Title");
    const changeTitle=()=>{
        setTitle("Title changed : Now it's Second Title");
    }
return (
    <div>
        <h1 onClick={changeTitle}>Hello again</h1>
        <Title title={title} />
    </div>
);
}
const Title=({title})=>{
    return(
        <div><h1>{title}</h1></div>
    )
}
export default AppExample3_1;