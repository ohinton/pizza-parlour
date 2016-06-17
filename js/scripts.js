//Business Logic

//Set Global Variables
var totalPrice = 0;

//Set Objects
function Pizza(name, size, meat, veg) {
  this.customerName = name;
  this.pizzaSize = size;
  this.meatTopping = meat;
  this.vegTopping = veg;
}

Pizza.prototype.totalPrice = function () {
  if (this.pizzaSize === "extra-large" && this.meatTopping === "meat" && this.vegTopping === "veggie") {
    totalPrice = 10;
  } else if (this.pizzaSize === "large" && this.meatTopping === "meat" && this.vegTopping === "veggie") {
    totalPrice = 8;
  } else if (this.pizzaSize === "medium" && this.meatTopping === "meat" && this.vegTopping === "veggie") {
    totalPrice = 6;
  } else {
    totalPrice = 4;
  }
  return totalPrice;
}

//User Logic
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();

    var orderName = $(".customer-name").val();
    var orderSize = $(".pizza-size").val();
    var meatTopping = $(".meat-topping").val();
    var veggieTopping = $(".veggie-topping").val();

    var newOrder = new Pizza(orderName, orderSize, meatTopping, veggieTopping);
    newOrder.totalPrice();

    $("#total").text("$" + totalPrice.toFixed(2));
    $("#show-price").show(totalPrice);

  });
  });
