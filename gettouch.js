var nameV1,emailv,message;

function readform()
{
    nameV1 = document.getElementById("name").value; 
    emailv = document.getElementById("mail").value;
    message=document.getElementById("message").value;
}


document.getElementById("insert").onclick = function(){
    readform();
    firebase
    .database()
    .ref("GET-In_touch data/"+nameV1)
    .set({
        User_Name :nameV1,   
        User_mail_id : emailv,
        User_message : message
    })
    alert("Thanks Our Team Will Contact you Soon");
    
}
