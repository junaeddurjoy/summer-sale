function addToList(productnumber){
    const product = document.getElementById(productnumber);
    const productName = product.innerText;
    const productItem = document.getElementById('purchase-list');
    const liItems = document.createElement("li");
    liItems.innerText = productName;
    productItem.appendChild(liItems);
}


// product add to list
function addToCart1(){
    addToList('product1');
    const priceText = document.getElementById('price1');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);
};
function addToCart2(){
    addToList('product2');
    const priceText = document.getElementById('price2');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);
}
function addToCart3(){
    addToList('product3');
    const priceText = document.getElementById('price3');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);
}
function addToCart4(){
    addToList('product4');
    const priceText = document.getElementById('price4');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);

}
function addToCart5(){
    addToList('product5');
    const priceText = document.getElementById('price5');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);

}
function addToCart6(){
    addToList('product6');
    const priceText = document.getElementById('price6');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);

}
function addToCart7(){
    addToList('product7');
    const priceText = document.getElementById('price7');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);

}
function addToCart8(){
    addToList('product8');
    const priceText = document.getElementById('price8');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);

}
function addToCart9(){
    addToList('product9');
    const priceText = document.getElementById('price9');
    const price = parseFloat(priceText.innerText);
    const totalprice = calculateTotalPrice(price);

}


// price
function calculateTotalPrice(price){
    const totalPriceText = document.getElementById('total-price');
    const oldTotalPrice = parseFloat(totalPriceText.innerText);
    const totalPrice = oldTotalPrice + price;
    totalPriceText.innerText = totalPrice;

    if(totalPrice<200){
        const button = document.getElementById('apply');
        button.setAttribute("disabled", "");
    }
    else{
        const button = document.getElementById('apply');
        button.removeAttribute("disabled");
    }
    if(totalPrice==0){
        const button = document.getElementById('make-purchase');
        button.setAttribute("disabled", "");
    }
    else{
        const button = document.getElementById('make-purchase');
        button.removeAttribute("disabled");
    }
    return totalPrice;
}

function calculateDiscount(price){
    const discountText = document.getElementById('discount');
    const oldDiscount = parseFloat(discountText.innerText);
    const totaldiscount = price * 0.2;
    discount = totaldiscount.toFixed(2);
    discountText.innerText = discount;
    return discount;
}

function finalTotal(totalprice,discount){
    const totalText = document.getElementById('total');
    const oldTotal = parseFloat(totalText.innerText);
    const total = totalprice - discount;
    totalText.innerText = total;
    return total;
}
function applyCoupon(){
    const totalPriceText = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceText.innerText);

    const couponCode = document.getElementById('coupon-field');
    const coupon = couponCode.value;

    if(coupon=='asdf'){
        const discount = calculateDiscount(totalPrice);
        finalTotal(totalPrice,discount);
    }
}

function goHome(){
    const coupon = document.getElementById('coupon-field');
    coupon.value = '';
    const totalprice = document.getElementById('total-price');
    totalprice.innerText = '00.00';
    const discount = document.getElementById('discount');
    discount.innerText = '00.00';
    const total = document.getElementById('total');
    total.innerText = '00.00';
    const productlist = document.getElementById('purchase-list');
    productlist.innerText = '';
    const button1 = document.getElementById('apply');
    button1.setAttribute("disabled", "");
    const button2 = document.getElementById('make-purchase');
    button2.setAttribute("disabled", "");
}

function sellTwenty(){
    // const totalpricetext = document.getElementById('total-price');
    // const totalprice = parseFloat(totalpricetext);
    // if (totalprice>200){
        const coupon = document.getElementById('coupon-field');
        coupon.value = 'asdf';
    // }
}

const button1 = document.getElementById('apply');
button1.setAttribute("disabled", "");
const button2 = document.getElementById('make-purchase');
button2.setAttribute("disabled", "");