function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

const product = [
    {
        id: 0,
        image: 'IMG/menu-1.jpg',
        title: 'Machiato',
        price: 1.85,
    },
    {
        id: 1,
        image: 'IMG/menu-2.jpg',
        title: 'Black Coffee',
        price: 1.85,
    },
    {
        id: 2,
        image: 'IMG/menu-3.jpg',
        title: 'Cappuccino',
        price: 1.85,
    },
    {
        id: 3,
        image: 'IMG/menu-4.jpg',
        title: 'Frappuccino 1',
        price: 2.75,
    },
    {
        id: 4,
        image: 'IMG/menu-5.jpg',
        title: 'Frappuccino 2',
        price: 2.75,
    },
    {
        id: 5,
        image: 'IMG/menu-6.png',
        title: 'Frappuccino 3',
        price: 2.75,
    },
    {
        id: 6,
        image: 'IMG/product-1.jpg',
        title: 'Green Tea',
        price: 2.25,
    },
    {
        id: 7,
        image: 'IMG/product-2.jpg',
        title: 'Chaga Tea',
        price: 2.25,
    },
    {
        id: 8,
        image: 'IMG/product-2.jpg',
        title: 'Peaberry Tea',
        price: 2.25,
    }
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();

}

function displaycart(a){
    let j = 0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$ "+0;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}


function validateCard() {
    // Get the card information from the form
    var nameOnCard = document.getElementById("name-on-card").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvc = document.getElementById("cvc").value;
  
    // Perform card validation logic
    var isValid = isValidCard(nameOnCard, cardNumber, expiryDate, cvc);
  
    // Display error message if the card is not valid
    var errorMessage = document.getElementById("error-msg");
    errorMessage.style.display = isValid ? "none" : "block";
  }
  
  function isValidCard(nameOnCard, cardNumber, expiryDate, cvc) {
    // Implement card validation logic here
    // Return true if the card is valid; otherwise, return false
    // You can use regular expressions, external libraries, or custom validation rules
  
    // Example validation: check if all fields are non-empty
    if (nameOnCard.trim() === "" || cardNumber.trim() === "" || expiryDate.trim() === "" || cvc.trim() === "") {
      return false;
    }
  
    // Example validation: check if card number has 16 digits
    var cardNumberWithoutSpaces = cardNumber.replace(/\s/g, "");
    if (cardNumberWithoutSpaces.length !== 16) {
      return false;
    }
  
    // Add more validation rules as per your requirements
  
    return true;
  }