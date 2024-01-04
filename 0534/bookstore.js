let cart = [];

let total = 0;

 

function addToCart(bookName, price) {

    cart.push({ name: bookName, price: price });

    total += price;

    updateCart();

}

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();

}

function updateCart() {

  let cartItemsElement = document.getElementById("cart-items");

  let totalElement = document.getElementById("total");

  cartItemsElement.innerHTML = '';

 

  cart.forEach((item, index) => {

      let itemElement = document.createElement("tr");

      itemElement.innerHTML = `

          <td>${item.name}</td>

          <td>${item.price.toFixed(2)} Rs</td>

          <td><button class="remove-button" onclick="removeFromCart(${index})">Remove</button></td>

      `;

      cartItemsElement.appendChild(itemElement);

  });

 

  totalElement.textContent = `Total: ${total.toFixed(2)} Rs`;

}

const books =[

  { title: "To Kill a Mockingbird", price: 150, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSX19y28-klVcRCDk1KH7TwLLMZI-al-ssL7vWrmLA3qQlRPjA0" },

  { title: "Gilead Book By Marilynne Robinson", price: 2299, image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689758810-screenshot-2023-07-19-at-10-26-24-64b7ac498a88f.png?crop=0.9886178861788617xw:1xh;center,top&resize=980:*" },

  { title: "Pride and Prejudice", price: 37999, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf" },

  { title: "1984", price: 2250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeglXlBmm240qQ70HEi6CpdgjyevAGT78Vo8iOVtsLnkiDw5pb" },

  { title: "The Great Gatsby", price: 4599, image: "https://www.oberlo.com/media/1603897583-image18.jpg?w=1824&fit=max" },

  { title: "Wuthering Heights", price: 199, image: "https://www.oberlo.com/media/1603897575-image29.jpg?w=1824&fit=max" },

  { title: "Fahrenheit 451", price: 50, image: "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1595049335/pro_pbid_621719.jpg" },

  { title: "Animal Farm", price: 450, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYI0B3QbLJvWVXPqxlgA7opIqbRq73uwqGHMyFzxDx4wvjJj_W" },

  { title: "pAll the Light We Cannot See", price: 1480, image: "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1701292701/pro_pbid_14698.jpg" },

  { title: "The Book Thief", price: 299, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-W_4DKzfvPOVZPfwHRn4OVbWYkTZRRT_F7QmPo8894_0QSzMG" },

];


function initializeBookstore() {

  let bookContainer = document.getElementById("book-container");

  books.forEach(book => {

      let bookElement = document.createElement("div");

      bookElement.classList.add("book");

      bookElement.innerHTML = `

          <img src="${book.image}" alt="${book.title}">

          <h3>${book.title}</h3>

          <p> ${book.price.toFixed(2)} Rs</p>

          <button onclick="addToCart('${book.title}', ${book.price})">Add to Cart</button>

      `;

      bookContainer.appendChild(bookElement);

  });

}

window.onload = function() {

  initializeBookstore();

};
