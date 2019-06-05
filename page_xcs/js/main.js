function main(){
 

  var val = document.getElementById("form-submit");
  val.addEventListener("click", connect, false);


}

function connect(){
  alert("hello!");

  $.ajax({

      url: "php/exec.php",

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