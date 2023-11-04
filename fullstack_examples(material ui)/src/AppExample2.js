import React,{Component,useRef} from "react";
function AppExample2(){
    const kk=useRef();
    const nextSlogan=()=>{
        kk.current.updateSlogan("THink very big guyssss");
    }
var slogan="This is first slogan";
    return (
    <div>
        <h1>Hello this is Heading</h1>
        <Title slogan={slogan} onHeadingClicked={nextSlogan} ref={kk} />
    </div>
)
}
class Title extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            "slogan":props.slogan
        };
        this.onHeadingClicked=props.onHeadingClicked;
    }
    updateSlogan(slogan)
    {
        this.setState({
            "slogan":slogan
        });
    }
    headingClicked=()=>
    {
        this.onHeadingClicked();
    }
    render(){
        return(
            <div>
                <h1 onClick={this.headingClicked}>{this.state.slogan}</h1>
            </div>
        )
    }
}
export default AppExample2;