//mentors database which stores data in the form
// {
//   Mentor_name:{
//                   subject,e_mail,list of students(array)
//                 }
// }
let mentors={};

//method to add a new mentor to the database
let addMentor=(name,subject,e_mail)=>{
    mentors[`${name}`]={
        subject,
        e_mail,
        students:[]
    }
}
module.exports={
    mentors,addMentor
}