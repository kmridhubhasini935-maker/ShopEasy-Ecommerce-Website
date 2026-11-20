let cart = [];
let total = 0;

function goToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    displayCart();

    alert(name + " added to cart!");
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    cart.forEach(function(item, index) {

        cartItems.innerHTML +=
            `<p>${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
            </p>`;

    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    displayCart();
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Your order has been placed successfully!");

    cart = [];
    total = 0;

    displayCart();
}
// Registration Function
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = this.querySelectorAll("input");

        const name = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
        const confirmPassword = inputs[3].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Registration Successful!");

        window.location.href = "login.html";
    });
}


// Login Function
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = this.querySelectorAll("input");

        const email = inputs[0].value;
        const password = inputs[1].value;

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (email === savedEmail && password === savedPassword) {
            alert("Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid Email or Password!");
        }
    });
}