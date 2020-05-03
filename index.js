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
    "itemName": item,
    "itemPrice": Math.floor(Math.random() * 100) + 1
  })
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var statement = "In your cart, you have"
  var j = cart.length
  if (j = 0) {
    return "Your shopping cart is empty."
  } else if (j = 1) {
    return `${statement} ${cart[itemName[0]]} at $${cart[itemPrice[0]]}.`
  } else {
    for (let i = 0; i + 1 < j; i--) {
      statement += ` ${cart[itemName[i]]} at $${cart[itemPrice[i]]},`
    }
    statement += ` and ${cart[itemName[j-1]]} at $${cart[itemPrice[j-1]]}.`
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
