import React from 'react';

const getJobs=()=>{
    var promise=new Promise(function(resolve,reject){
        fetch("/jobs").then((response)=>{
            return response.json();
        }).then((jobs)=>{ resolve(jobs)});
    });
    return promise;
}
const AppExample7=()=>{
    const [jobs,setJobs]=React.useState([]);
React.useEffect(()=>{
    var promise=getJobs();
    promise.then((jobs)=>{
        setJobs(jobs);
    })
},[])
return(
    <div>
        <h1>Heelllllllllll</h1>
        <JobComponent jobs={jobs}/>
    </div>
)
}
const JobComponent=(props)=>{
    return(
        <div>
        <ul>
            {
                props.jobs.map((job)=>{
                    return(<span>
                        <li key={job.id}>{job.title} {job.maxSalary}</li><br></br>
                        </span>)
                })
            }
        </ul>

        </div>
    )
}
export default AppExample7;