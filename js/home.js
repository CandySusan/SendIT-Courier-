
function check_input() {
    var input = document.getElementById("email");
    if (input.value == "") {
        document.getElementById("msg").innerHTML = "Email cannot be blank!";
        input.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(input.value)) {
        alert("Error: Email must contain only letters, numbers and underscores!");
        input.focus();
        return false;
    }

}


function validate_input() {
    var input = document.getElementById("rg_em");
    if (input.value == "") {
        document.getElementById("alert").innerHTML = "Email cannot be blank!";
        input.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(input.value)) {
        alert("Error: Email must contain only letters, numbers and underscores!");
        input.focus();
        return false;
    }

    //     if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    //         if (form.pwd1.value.length < 6) {
    //             alert("Error: Password must contain at least six characters!");
    //             form.pwd1.focus();
    //             return false;
    //         } if (form.pwd1.value == form.username.value) {
    //             alert("Error: Password must be different from Username!");
    //             form.pwd1.focus();
    //             return false;
    //         }
    //         re = /[0-9]/;
    //         if (!re.test(form.pwd1.value)) {
    //             alert("Error: password must contain at least one number (0-9)!");
    //             form.pwd1.focus();
    //             return false;
    //         }
    //         re = /[a-z]/;
    //         if (!re.test(form.pwd1.value)) {
    //             alert("Error: password must contain at least one lowercase letter (a-z)!");
    //             form.pwd1.focus();
    //             return false;
    //         }
    //         //         re = /[A-Z]/;
    //         //         if (!re.test(form.pwd1.value)) {
    //         //             alert("Error: password must contain at least one uppercase letter (A-Z)!");
    //         //             form.pwd1.focus();
    //         return false;
    // //         }
    // //     } else {
    // //         alert("Error: Please check that you've entered and confirmed your password!");
    // //         form.pwd1.focus();
    // //         return false;
    // //     }

    // //     alert("You entered a valid password: " + form.pwd1.value);
    // //     return true;
    // // }

}