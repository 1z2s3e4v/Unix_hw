function main(){
 

  var val = document.getElementById("form-submit");
  val.addEventListener("click", connect, false);


}

function connect(){
  alert("hello!");


  var time = $("#time").val();
  var PC = $("#PC").val();
  var User = $("#User").val();
  var passwd = $("#passwd").val();
  var message = $("#message").val();

  alert("time: " + time);

  alert("PC: " + PC);
  alert("User: " + User);
  alert("passwd: " + passwd);
  alert("message: " + message);

  $.ajax({

      url: "php/exec.php",
      data: {time: time,PC: PC, User: User, passwd: passwd, message: message},

      type: "POST",
      datatype: "html",
      success: function(output)
      {
          alert("success");
          $("#show").html(output);
      },
      error : function()
      {
         alert( "Request failed.\n" );
      }
  
  });
}


window.addEventListener("load", main, false);