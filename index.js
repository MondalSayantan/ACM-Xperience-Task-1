// Take value from the form fields with id: fname and lname and print it in the console

takeValue = function () {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  alert(fname + ", " + lname);
};
