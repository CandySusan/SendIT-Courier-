
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

var shoppingCart = [];


function displayShoppngCart() {
    var DeliveryOrderBody = document.getElementById("DeliveryOrderBody");

    while (DeliveryOrderBody.rows.length > 0) {
        DeliveryOrderBody.deleteRow(0);
    }


    var order_total_price = 0;

    for (var OrderNumber in shoppingCart) {

        var row = DeliveryOrderBody.insertRow();

        var cellPickUpLocation = row.insertCell(0);
        var cellDestination = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align = "right";

        cellPickUpLocation.innerHTML = shoppingCart[OrderNumber].Name;
        cellDestination.innerHTML = shoppingCart[OrderNumber].Destination;
        cellPrice.innerHTML = shoppingCart[OrderNumber].Price;
        cart_total_price += shoppingCart[OrderNumber].Price;
    }

    document.getElementById("order_total").innerHTML = order_total_price;
}