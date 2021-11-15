//importing students database
let {students}=require('./student.js');
//importing mentors databse
let {mentors}=require("./mentor.js");

//method to assign a student or students to a mentor or update a mentor for a student(it depends on update variable if it is true then we update the mentor for a student and if it false then we assign a student or students to a mentor),
// this method takes three arguements first one is the list of student names , mentor name, and the update variable which is either true or false
let assign_mentor_student=(st_names,m_name,update)=>{
    if(st_names.length>0 && m_name)
    {
        if(update)
        {
            let tmp_m=students[st_names[0]].mentor;
            let tmp_arr=mentors[tmp_m].students;
            tmp_arr.forEach((st,idx)=>{
                if(st===st_names[0])
                {
                    tmp_arr[idx]=tmp_arr[tmp_arr.length-1];
                    tmp_arr.pop();
                }
            });
            assign_mentor_student(st_names,m_name,!update);
        }
        else
        {
            st_names.forEach(st => {
                students[st].mentor=m_name;
                mentors[m_name].students.push(`${st}`);
            });
        }
    }
    else
    {
        throw new Error("Incomplete Request!!! ");
    }
    
}

module.exports={
    assign_mentor_student
}