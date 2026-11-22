
// PART 1: Variables

const storeName: string = "ElectroShop";
const storeDescription: string = "Electronic Products Store";
const currency: string = "USD";

let numberOfProducts: number = 3;
let isStoreOpen: boolean = true;


// PART 3: Arrays and Multi-Type Arrays

let productNames: string[] = [
    "Laptop",
    "Headphones",
    "Keyboard",
    "Mouse",
    "Mobile Phone"
];

let productInfo: (string | number | boolean)[] = [
    "Laptop", 650, true
];


// PART 4: Conditions and Loops

if (isStoreOpen) {
    console.log("Store is Open");
} else {
    console.log("Store is Closed");
}

let price: number = 650;

if (price > 500) {
    console.log("Expensive Product");
} else if (price >= 100) {
    console.log("Medium Price");
} else {
    console.log("Affordable Product");
}

// Display all product names
for (let name of productNames) {
    console.log(name);
}


// PART 5: Functions

function calculateDiscount(
    price: number,
    discountPercentage: number
): number {
    return price - (price * discountPercentage / 100);
}

function checkProductAvailability(quantity: number): string {
    if (quantity > 0) {
        return "In Stock";
    } else {
        return "Out of Stock";
    }
}

function displayStoreMessage(message: string): void {
    console.log(message);
}


// PART 6: Optional and Default Parameters

function displayProductInfo(
    name: string,
    price: number,
    description?: string,
    currency: string = "USD"
): void {
    console.log(name, price, description, currency);
}


// PART 7: Rest Parameters

function calculateTotalPrice(...prices: number[]): number {
    let total: number = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}


// PART 8: Array of 3 Product Objects

interface Product {
    name: string;
    description: string;
    price: number;
}

let products: Product[] = [
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
let count: number = 0;

for (let product of products) {
    if (product.price > 100) {
        count++;
    }
}

console.log("Products above 100:", count);


// PART 9: Load Products into HTML

function loadProducts(): void {
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
