"use strict";
// PART 1: Variables
const storeName = "ElectroShop";
const storeDescription = "Electronic Products Store";
const currency = "USD";
let numberOfProducts = 3;
let isStoreOpen = true;
// PART 3: Arrays and Multi-Type Arrays
let productNames = [
    "Laptop",
    "Headphones",
    "Keyboard",
    "Mouse",
    "Mobile Phone"
];
let productInfo = [
    "Laptop", 650, true
];
// PART 4: Conditions and Loops
if (isStoreOpen) {
    console.log("Store is Open");
}
else {
    console.log("Store is Closed");
}
let price = 650;
if (price > 500) {
    console.log("Expensive Product");
}
else if (price >= 100) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
// Display all product names
for (let name of productNames) {
    console.log(name);
}
// PART 5: Functions
function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
function displayStoreMessage(message) {
    console.log(message);
}
// PART 6: Optional and Default Parameters
function displayProductInfo(name, price, description, currency = "USD") {
    console.log(name, price, description, currency);
}
// PART 7: Rest Parameters
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
let products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
numberOfProducts = products.length;
// Count products with price greater than 100
let count = 0;
for (let product of products) {
    if (product.price > 100) {
        count++;
    }
}
console.log("Products above 100:", count);
// PART 9: Load Products into HTML
function loadProducts() {
    let container = document.getElementById("products");
    if (container) {
        container.innerHTML = "";
        for (let product of products) {
            container.innerHTML += `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price} ${currency}</p>
                <hr>
            `;
        }
    }
}
// Test Functions
console.log(calculateDiscount(650, 10));
console.log(checkProductAvailability(5));
displayStoreMessage("Welcome to ElectroShop");
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM");
console.log(calculateTotalPrice(100, 200, 50, 150));
