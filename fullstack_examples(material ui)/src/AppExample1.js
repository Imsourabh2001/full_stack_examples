import React,{Component,useRef} from 'react';
class Student
{
    constructor(id,name,salary,company){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.company=company;
    }
}
function AppExample1(){
    var students=[];
    var heading="THIS IS HEADING OF THE PAGE";
    students.push(new Student(101,"Sourabh Dubey",200000,"AAAAA"));
    students.push(new Student(102,"Ayushi Dubey",300000,"WEEWW"));
    students.push(new Student(103,"Shubham Dubey",400000,"GGGG"));
    students.push(new Student(104,"Sonali Dubey",500000,"SSSSSS"));
    students.push(new Student(105,"Priyaa Dubey",500000,"DDDDD"));
    students.push(new Student(106,"Adarsh Dubey",600000,"CCCCC"));

    const filteredStudent=[];
    students.forEach(student => {
        filteredStudent.push(student);        
    });
    const kk=useRef();
    const sl=useRef();
    const selectedStudent={
        "name":"",
        "salary":"",
        "company":""
    };
    const searchCriteriaChanged=(ev)=>{
        var searchWhat=ev.currentTarget.value.trim().toLowerCase();
        filteredStudent.splice(0,filteredStudent.length);
        for(var e=0;e<students.length;e++)
        {
            if(students[e].company.toLowerCase().includes(searchWhat))
            {
                filteredStudent.push(students[e]);
            }
        }
        sl.current.updateStudent(filteredStudent);
        selectedStudent.name="";
        selectedStudent.company="";
        selectedStudent.salary="";
        kk.current.updateStudent(selectedStudent);
    }
    const onStudentSelected=(student)=>{
        kk.current.updateStudent(student);
    }
    return(
    <div>
        <Heading heading={heading}/>
        Filter By Company : <input type='text' onChange={searchCriteriaChanged} />
        <StudentsList students={filteredStudent} year="2023" onSelected={onStudentSelected} ref={sl}/>
        <StudentsDetail selectedStudent={selectedStudent} ref={kk}/>
    </div>
);
}
class Heading extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            "heading":props.heading
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.heading}</h1>
            </div>
        );
    }
}
class StudentsList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            "students":props.students,
            "year":props.year
        }
        this.onSelected=props.onSelected;
    }
    updateStudent(student)
    {
        this.setState({
            "students":student
        });
    }
  studentClickedHandler=(ev)=>{
        var student=null;
        var studentId=ev.currentTarget.getAttribute("id");
        for(var i=0;i<this.state.students.length;i++)
        {
            if(studentId==this.state.students[i].id)
            {
                student=this.state.students[i];
                break;
            }
        }
        if(student)
        {
            this.onSelected(student);
        }
    }
    render(){
        return(
            <div>
                <h1>Student's List Year {this.state.year}</h1>
                <ul>
                    {
                        this.state.students.map((student)=>{
                            return(<li key={student.id} id={student.id} onClick={this.studentClickedHandler} >{student.name} ({student.company})</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
class StudentsDetail extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            "student":props.selectedStudent
        };
    }
    updateStudent(student)
    {
        this.setState({
            "student":student
        });
    }
    render(){
        return(
            <div>
                <h1>Details of student</h1>
                Name : <b>{this.state.student.name}</b><br></br>
                Company : <b>{this.state.student.company}</b><br></br>
                Salary : <b>{this.state.student.salary}</b><br></br>
            </div>
        )
    }
}
export default AppExample1;