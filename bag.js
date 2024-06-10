
 

const addToCartButton = document.getElementById('add-to-cart');
  const buyNowButton = document.getElementById('buy-now');

  addToCartButton.addEventListener('click', () => {
    alert('You have added to cart!');
  });

  buyNowButton.addEventListener('click', () => {
    alert('You have successfully bought the item!');
  });


function addToCart() {
    alert("Item added to cart!");
}

function buyNow() {
    alert("Item purchased successfully!");
}