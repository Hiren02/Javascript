console.log('This is events');

document.getElementById('heading').addEventListener('click', function(e){

    console.log("You have clicked the heading");
    console.log(e);
    // location.href = '//google.com';
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    console.log(variable);

});

