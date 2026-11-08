var cart = [];

function addToCart(gameName) {
    if (cart.includes(gameName)) {
        alert("Ця гра вже додана до твого кошика!");
        return;
    }
    
    cart.push(gameName);
    updateCartUI();
}

function removeFromCart(gameName) {
    var index = cart.indexOf(gameName);
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    var cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li class="empty-cart">Кошик поки що порожній</li>';
        return;
    }

    cart.forEach(function(game) {
        var li = document.createElement("li");
        li.innerHTML = '<span>🎮 ' + game + '</span> <button class="remove-btn" onclick="removeFromCart(\'' + game + '\')">❌</button>';
        cartItemsContainer.appendChild(li);
    });
}
