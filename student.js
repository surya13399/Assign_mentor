//students database which stores data in the form
// {
//   Student_name:{
//                   age,e_mail,mentor
//                 }
// }
let students={};

//method to add a new student in the database
let addStudent=(name,age,e_mail)=>{
    students[`${name}`]={
        age,
        e_mail,
        mentor:""
    }
}

module.exports={
    students,addStudent
}