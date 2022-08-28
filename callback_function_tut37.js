console.log('This is callBack function');

// Pretend that this response is coming from the server.
const students = [
    {name:"Hiren", subject:"javaScript"},
    {name:"Vasu", subject:"Python"}
]

function enrollStudent(student, callBack){
    setTimeout(function()  {
        students.push(student);
        console.log('Student has been enrolled!');
        callBack();
    }, 3000);
}

function getStudents(){
    setTimeout(function()  {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;        
        console.log('Students have been fetched!');

    }, 1000);
}

let newStudent = {name:"manan", subject:"C++"}
enrollStudent(newStudent,getStudents);
getStudents();