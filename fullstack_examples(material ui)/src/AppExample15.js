import React from 'react';
const AppExample15=()=>{
    const [title,setTitle]=React.useState("Think big guyssssssssssssss");
    alert('Getting excuted');  //message box will come 2 times=> 2 times rendering is done.
    // if we want rendering to done only one time use hook useEffect()

    const clickHandler=()=>{
        setTitle("Think big is not enough, work hard as well");
    }
return(
    <div>
        <h1>Wel-Come back to change the title example</h1>
        <button type='button'onClick={clickHandler}>Change title</button>
        <TitleComponent title={title}/>
    </div>
)
}
const TitleComponent=({title})=>{
    return(
        <div>
            <h2>Here is the Heading : {title}</h2>
        </div>
    )
}
export default AppExample15;