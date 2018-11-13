// function check_input() {
//     var input = document.getElementById("email");
//     if (input.value == "") {
//         document.getElementById("msg").innerHTML = "Email cannot be blank!";
//         input.focus();
//         return false;
//     }
//     re = /^\w+$/;
//     if (!re.test(input.value)) {
//         alert("Error: Email must contain only letters, numbers and underscores!");
//         input.focus();
//         return false;
//     }

// }

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

