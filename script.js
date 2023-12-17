// message

function message() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var from = new FormData();
  from.append("name" , name);
  from.append("email", email);
  from.append("subject", subject);
  from.append("message", message);


 

  var Request = new XMLHttpRequest();
  Request.onreadystatechange= function(){
    if(Request.readyState==4&&Request.status==200){
       var send = Request.responseText;
        if(send=="Success"){
          alert("Your message has been successfully sent, we will contact you shortly");
          window.location.reload();
        }else{
          alert(send);
        }
    }
  };
  Request.open("POST","SendMessageProcess.php",true);
  Request.send(from);
}

//message End



document.addEventListener("DOMContentLoaded", function () {
  const numberOfSnowflakes = 50;
  const container = document.body;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
  }

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;

    container.appendChild(snowflake);

    setTimeout(() => {
      container.removeChild(snowflake);
      createSnowflake();
    }, 2000);
  }
});