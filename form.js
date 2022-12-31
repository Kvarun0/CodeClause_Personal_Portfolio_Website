
var nameV;
var emailV;
var msgV;

function readForm(){
    nameV = document.getElementById("name").value;
    emailV = document.getElementById("email").value;
    msgV = document.getElementById("msg").value;

    console.log(nameV , emailV , msgV);
}   


document.getElementById("submit").onclick =function(){
    readForm();

    firebase
        .database()
        .ref("FormData" + nameV)
        .set(
            {
            name : nameV,
            email : emailV,
            msg : msgV
            }
        );
    alert("Msg Send Succesfully");
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("msg").value = " ";
}; 