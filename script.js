function stringobj() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    
   // var results = document.write("<input type='text'>")
    var results = document.getElementById("results")
    results.innerHTML = fname + " " + lname;
   // var results = document.write(lname + fname);
   
   var results2 = document.getElementById("results")
   results2.innerHTML = lname.toUpperCase() + ", " + fname.toUpperCase();
}


