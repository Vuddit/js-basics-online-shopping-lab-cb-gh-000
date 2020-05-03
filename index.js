var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  })
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var statement = "In your cart, you have"
  var j = cart.length
  if (cart.length === 0) {
    console.log("Empty run")
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `${statement} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    for (let i = 0; i + 1 < cart.length; i++) {
      statement += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    statement += ` and ${cart[j-1].itemName} at $${cart[j-1].itemPrice}.`
    return statement
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
