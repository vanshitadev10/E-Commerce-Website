// Submit And Reset Buttons

var sub = document.querySelector('.btn1');
var res = document.querySelector('.btn2');

sub.addEventListener('click', (e) => {
    if (!(confirm('Are You Sure You Wish To Submit These Details?'))) {
        e.preventDefault();
    }
})

res.addEventListener('click', (e) => {
    if (!(confirm('Are You Sure You Want To Reset This Text?'))) {
        e.preventDefault();
    }
})


// Order Summary

var order_info = document.querySelector('.order_info');
var sum = 0;

if(localStorage.getItem('list0')){
var items = JSON.parse(localStorage.getItem('list0'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}





if(localStorage.getItem('list1')){
var items = JSON.parse(localStorage.getItem('list1'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}





if(localStorage.getItem('list2')){
var items = JSON.parse(localStorage.getItem('list2'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}






if(localStorage.getItem('list3')){
var items = JSON.parse(localStorage.getItem('list3'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}






if(localStorage.getItem('list4')){
var items = JSON.parse(localStorage.getItem('list4'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <div class="ord">
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}






if(localStorage.getItem('list5')){
var items = JSON.parse(localStorage.getItem('list5'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}






if(localStorage.getItem('list6')){
var items = JSON.parse(localStorage.getItem('list6'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}






if(localStorage.getItem('list7')){
var items = JSON.parse(localStorage.getItem('list7'));
for (var i = 0; i < items.length; i++) {
    var random = items[i];

    var ran;
    if (random[0] == 0 && random[1] == 0) {
        ran = random[2];
    }
    else if (random[0] == 0) {
        ran = 10 * random[1] + parseInt(random[2]);
    }
    else {
        ran = 100 * random[0] + 10 * random[1] + parseInt(random[2]);
    }

    var child_order = document.createElement('div')
    child_order.innerHTML =
        `<img class = "cart_image" src="images/img${ran}.jpg" alt="handbag image">
        <div class="ord">
        <h3 class="order_write">Product-Id:&nbsp;&nbsp;TTF${random[0]}${random[1]}${random[2]}</h3>
        <h3 class="order_write">Total Quantity:&nbsp;&nbsp;${random[4]}</h3>
        <h3 class="order_write">Total Price:&nbsp;&nbsp;${random.substring(6, random.length)}/-</h3>
        </div>`
        child_order.classList.add('order_set')
    order_info.appendChild(child_order);
    sum+=parseInt(random.substring(6, random.length));
}
}




// Delete Button
var delete_btn = document.querySelector('.delete_btn');
delete_btn.addEventListener('click', (e) => {
    if (confirm("Do You Really Want To Clear Your Cart?")) {
        location.reload();
        localStorage.clear();
    }
    else {
        e.preventDefault();
    }
})




// Price

var price = document.querySelector('.pri');
price.textContent = `${sum}`;