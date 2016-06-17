//business Logic

var totalPrice = 0;

function Pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.orderToppings = toppings;
}

Pizza.prototype.totalPrice = function () {
  if (this.pizzaSize === "extra-large") {
    totalPrice = 10;
  } else if (this.pizzaSize === "large") {
    totalPrice = 8;
  } else if (this.pizzaSize === "medium") {
    totalPrice = 6;
  } else {
    totalPrice = 4;
  }

  if (this.orderToppings === 4) {
    totalPrice += 4;
  } else if (this.orderToppings === 3) {
    totalPrice += 3;
  } else if (this.orderToppings === 2) {
    totalPrice += 2;
  } else if (this.orderToppings === 1) {
    totalPrice += 1;
  } else {
  }
  return totalPrice;
}

//user logic
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();

    var orderName = $(".customer-name").val();
    var orderSize = $(".pizza-size").val();

    var orderToppings = 0;
    for (i=0;i<document.pizzaorder.topping.length;i++){
      if (document.pizzaorder.topping[i].checked==true){
        orderToppings+=1;
      }
    }

    var newOrder = new Pizza(orderName, orderSize, orderToppings);
    newOrder.totalPrice();

    $("#total").text("$" + totalPrice.toFixed(2));
    $("#name").text(orderName);
    $("#show-price").show(totalPrice);
  });
});
