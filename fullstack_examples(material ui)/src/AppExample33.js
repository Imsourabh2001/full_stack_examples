import { Accordion, AccordionDetails, AccordionSummary, withStyles } from '@material-ui/core'
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const myStyles=(theme)=>{
    return({
        mainContainer:{
            flexGrow: 1
        }
    })
}
const AppExample33=(props)=>{
const [openAccordion,setOpenAccordion]=React.useState(false);
const onAccordionStateChanged=(idx,state)=>{
   // alert(idx+","+state);
    if(idx!==openAccordion) setOpenAccordion(idx);
    else setOpenAccordion(false);
}
    return(
        <div>
            <Accordion key={0} expanded={openAccordion===0} onChange={ (ev,ex)=>{ onAccordionStateChanged(0,ex) } }>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Courses</AccordionSummary>
            <AccordionDetails>
                C<br/>
                C++<br/>
                Java<br/>
                Python<br/>
                DSA<br/>
            </AccordionDetails>
            </Accordion>

            <Accordion key={1} expanded={openAccordion===1} onChange={ (ev,ex)=>{ onAccordionStateChanged(1,ex) } }>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Contact Us</AccordionSummary>
            <AccordionDetails>
            Mobile No.: 9302097228<br/>
            Email Address: sd1216597@gmail.com<br/>
            Home Address: 59-A abhishek nagar, Nanakheda Ujjain
            </AccordionDetails>
            </Accordion>
            <Accordion key={2} expanded={openAccordion===2} onChange={ (ev,ex)=>{ onAccordionStateChanged(2,ex) } }>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Offers</AccordionSummary>
            <AccordionDetails>
            50% off
            </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default withStyles(myStyles)(AppExample33);