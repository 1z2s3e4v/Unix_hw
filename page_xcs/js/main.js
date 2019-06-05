function main(){
 

  var val = document.getElementById("form-submit");
  val.addEventListener("click", connect, false);


}

function connect(){
  alert("hello!");


  var min = $("#Min").val();
  var hour = $("#Hour").val();
  var day = $("#Day").val();
  var mon = $("#Mon").val();


  var pc = $("#PC").val();
  var usr = $("#User").val();
  var pwd = $("#passwd").val();
  var mes = $("#message").val();

  // alert("time: " + min + "/" + hour + "/" + day + "/" + mon);

  // alert("PC: " + PC);
  // alert("User: " + User);
  // alert("passwd: " + passwd);
  // alert("message: " + message);

  $.ajax({

      url: "php/exec.php",
      data: {_min: min,_hour: hour,_day: day,_mon: mon,_pc: pc, _usr: usr, _pwd: pwd, _mes: mes},

      type: "POST",
      datatype: "html",
      success: function(output)
      {
          alert("success");
          $("#show").html(output);
      },
      error : function()
      {
           alert("Reqire false");
      }
  
  });
}


window.addEventListener("load", main, false);