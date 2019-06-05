function main(){
  default_file();
  deleteAllCookies();
  var val = document.getElementById("btn");
  val.addEventListener("click", check_to_run, false);

  

  upload_listener();
  upload_model_py_listener();
  upload_tainingData_listener();

  count = new Array(7);
  for(i=0;i<7;i++){
    count[i] = 0;
  }
  var code = document.getElementById("code");
  show_result_page();
  initialSVG();
}