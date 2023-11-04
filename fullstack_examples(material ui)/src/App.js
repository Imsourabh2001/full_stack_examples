import React,{Component,useRef} from "react";
class Student
{
  constructor(rollNumber,name,branch,mobileNumber)
  {
    this.rollNumber=rollNumber;
    this.name=name;
    this.branch=branch;
    this.mobileNumber=mobileNumber
  }
}
const App=()=>{
  const kk=useRef();
  const selectedStudent={
    "name":"",
    "branch":"",
    "mobileNumber":""
  };
  const onStudentClicked=(student)=>{
    kk.current.updateStudent(student);
  }
 const students=[];
 const year=2023;
 students.push(new Student(101,"Anay Dubey","CSE",9999999999));
 students.push(new Student(102,"Adarsh Dubey","IT",9999988888));
 students.push(new Student(103,"Priya Dubey","ME",9999977777));
 students.push(new Student(104,"Sonali Dubey","AI",6666699999));
 students.push(new Student(105,"Shubham Dubey","CSE",88888999999));
 students.push(new Student(106,"Ayushi Dubey","EE",7777799999));
  return (
    <div>
      <h1>List of Student</h1>
      <List students={students} year={year} onStudentClicked={onStudentClicked} />
      <Detail student={selectedStudent} ref={kk} />
    </div>
  );
}
class List extends React.Component
{
  constructor(props)
  {
    super(props);
      this.state={
        "students":props.students,
        "year":props.year
      };
      this.onStudentClicked=props.onStudentClicked;
  }
  studentClickHandler=(ev)=>{
    var student=null;
    var studentId=ev.currentTarget.getAttribute("id");
    for(var e=0;e<this.state.students.length;e++)
    {
      if(studentId==this.state.students[e].rollNumber)
      {
        student=this.state.students[e];
        break;
      }
    }
    if(student)
    {
      this.onStudentClicked(student);
    }
  }
  render()
  {
    return(
      <ul>
        {
          this.state.students.map((student)=>{
              return(<li key={student.rollNumber} id={student.rollNumber} onClick={this.studentClickHandler}>{student.name}</li>)
          })
        }
      </ul>
    );
  }
}
class Detail extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      "student":props.student
    };
  }
  updateStudent(student)
  {
    this.setState({
      "student": student
    });
  }
  render()
  {
    return(
      <div>
        <h2>Details Of Student</h2>
        Roll Number : <b>{this.state.student.rollNumber}</b><br></br>
        Name : <b>{this.state.student.name}</b><br></br>
        Branch : <b>{this.state.student.branch}</b><br></br>
        Mobile Number : <b>{this.state.student.mobileNumber}</b><br></br>
      </div>
    );
  }
}
export default App;