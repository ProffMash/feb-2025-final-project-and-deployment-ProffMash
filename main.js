
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active'); 
  cart.classList.remove('active');
  menu.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  searchForm.classList.remove('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');   
}
window.onscroll = () =>{
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  menu.classList.remove('active');
}


//orders
const form = document.getElementById('order-form');

    form.addEventListener('submit', (e) => {
        // Retrieve user inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const product = document.getElementById('product').value;
        const additionalOrders = document.getElementById('additional-orders').value;

        // Display order details
        alert(`Thank you, ${name}! Your order for ${product}(s) has been placed. We will contact you at ${email} or ${phone} for further details.
        Additional/Special Orders: ${additionalOrders}`);

        // After performing necessary actions, submit the form
        form.submit();

        // Prevent default form submission
        e.preventDefault();
    });
