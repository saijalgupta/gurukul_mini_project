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


document.getElementById("insert_feedback").onclick = function(){
    nameV1 = document.getElementById("name1").value; 
    emailv = document.getElementById("mail1").value;
    message=document.getElementById("userfeedback").value;
    firebase
    .database()
    .ref("Feedback_data/"+nameV1)
    .set({
        Users_Name :nameV1,   
        Users_mail_id : emailv,
        feedback:message
        
    })
  
    document.getElementById("name1").value = "";
    document.getElementById("mail1").value = "";
    document.getElementById("userfeedback").value = "";
    alert("Thanks For Your Valueable Feedback");

}


document.getElementById("emailSend").onclick = function(){
    emailv = document.getElementById("email2").value;
    namev = document.getElementById("name2").value;
    console.log(emailv);
    firebase
    .database()
    .ref("UpdatesAndNewsLater/"+namev)
    .set({
        Users_mail_id : emailv,
        Users_name : namev
    })
    document.getElementById("email2").value = "";
    alert("Thanks For Your subscription you will get latest updates and newslater on your provided emailId");

}
