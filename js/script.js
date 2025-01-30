"use strict"

let subtotal = 10;
let discount = 5;
let shipping = 100;

subtotal -= discount;

let total = (subtotal + shipping);

document.getElementById("subtotal").textContent = `${subtotal}`; 
document.getElementById("shipping").textContent = `${shipping}`; 
document.getElementById("total").textContent = `${total}`; 