//business Logic

function Pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.orderToppings = toppings;
}

Pizza.prototype.calculatePrice = function () {
  var totalPrice = 0;
    if (this.pizzaSize === "extra-large") {
      this.totalPrice = 10;
    } else if (this.pizzaSize === "large") {
      this.totalPrice = 8;
    } else if (this.pizzaSize === "medium") {
      this.totalPrice = 6;
    } else {
      this.totalPrice = 4;
    }

    if (this.orderToppings === 4) {
      this.totalPrice += 4;
    } else if (this.orderToppings === 3) {
      this.totalPrice += 3;
    } else if (this.orderToppings === 2) {
      this.totalPrice += 2;
    } else if (this.orderToppings === 1) {
      this.totalPrice += 1;
    } else {
    }
    return this.totalPrice;
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

    $("#total").text("$" + newOrder.calculatePrice().toFixed(2));
    $("#name").text(orderName);
    $("#show-price").show();
  });
});
