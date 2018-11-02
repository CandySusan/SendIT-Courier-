function check_input() {
    var input = document.getElementById("email").value;
    if (input == "") {
        alert("Please enter correct email address");
        return false;
    } else {
        alert(input)
    }
}


var ron = false;
$(document).ready(function () {
    $("#reg-panel input").focus(function () {
        KillNote($(this).attr("id"));
    }); $("#reg-panel select").change(function () { KillNote($(this).attr("id")); });
    $("#btnRegister").click(function () { __tryreg(); })
});
function __tryreg() {
    if (ron) return; ron = true;
    var url = "m=au-reg&hh=" + escape($("#rg_hh").val());
    url += "&cn=" + encodeURIComponent($("#rg_cn").val());
    url += "&em=" + escape($("#rg_em").val());
    url += "&p1=" + escape($("#rg_p1").val());
    url += "&p2=" + escape($("#rg_p2").val());
    url += "&hash="; url += "&discode="; A(url);
}
$(document).ready(function () { __jumpto(".reg-panel", null); });

