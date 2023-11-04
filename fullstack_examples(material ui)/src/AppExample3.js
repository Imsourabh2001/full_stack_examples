// react hook

import React from 'react';
function AppExample3()
{
    const [aaa,bbb]=React.useState("THis is the title of the page before clicking");
    const changeHeading=()=>{
        bbb("Heading is changed hereeeeeeeeeeeeeeeee");
    }
    return(
        <div>
            <h1 onClick={changeHeading}>Hellloooooooo</h1><br></br>
            <hr></hr>
            <h3>{aaa}</h3>
        </div>
    )
}
export default AppExample3;