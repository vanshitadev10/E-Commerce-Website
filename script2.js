// Cart And Close Button

const cart_menu = document.querySelector('#cart_menu');
const cart = document.querySelector('.cart');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const active = document.querySelector('.active');


cart.addEventListener('click', () => {
    open.style.display = 'block';
    document.body.style.background = '#ff8a4b59';
    active.style.background = '#ffac7f';
})

close.addEventListener('click', () => {
    open.style.display = 'none';
    document.body.style.background = 'white';
    active.style.background = '#cecece';
})





// Adding Pages To The Buttons

const list = document.querySelector('.list').lastElementChild;
const ele1 = list.firstElementChild;
const ele2 = ele1.nextElementSibling;
const ele3 = ele2.nextElementSibling;
const ele4 = ele3.nextElementSibling;
const ele5 = ele4.nextElementSibling;

ele1.addEventListener('click', () => {
    window.location.href = "deals.html";
})

ele2.addEventListener('click', () => {
    window.location.href = "watch.html";
})

ele3.addEventListener('click', () => {
    window.location.href = "jewelry.html";


    const but_jew = document.querySelector('.btn');
    const but_jew1 = but_jew.firstElementChild.firstElementChild;
    const but_jew2 = but1.nextElementSibling;
    const but_jew3 = but2.nextElementSibling;
    const but_jew4 = but3.nextElementSibling;

    but_jew1.addEventListener('click', () => {
        window.location.href = "jewelry.html";
    })

    but_jew2.addEventListener('click', () => {
        window.location.href = "earrings.html";
    })

    but_jew3.addEventListener('click', () => {
        window.location.href = "fas-jewel.html";
    })

    but_jew4.addEventListener('click', () => {
        window.location.href = "trad-jewel.html";
    })
})

ele4.addEventListener('click', () => {
    window.location.href = "sunglasses.html";
})

ele5.addEventListener('click', () => {
    window.location.href = "others.html";
})






// Storing Of Cart Information

const atc = document.querySelectorAll('.atc_btn');
const proce = document.querySelector('.proceed');
const cart_content = document.querySelector('.cart_content');
var random = 0;
var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var count5 = 1;
var count6 = 1;
var count7 = 1;
var count8 = 1;
var count9 = 1;
var count10 = 1;
var count11 = 1;
var count12 = 1;
var count13 = 1;
var count14 = 1;
var count15 = 1;
var count16 = 1;


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


atc[0].addEventListener('click', () => {
    var pro = atc[0].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count1}`, parseInt(atc[0].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart1">
                                <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                <div class = "cart_block">
                                    <div>
                                        <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                        <h3 class = "change1a">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count1}</span></h3>
                                        <h3 class = "change2a">Total Price:&nbsp;&nbsp;<span class="pri">${count1 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count1}`)}</span>/-</h3>
                                    </div>
                                    <div>
                                        <button class="minus1 cart-btns">
                                            <img src="images/minus.png" alt="close">
                                        </button>
                                    </div>
                                    <div>
                                        <button class="plus1 cart-btns">
                                            <img src="images/plus.png" alt="close">
                                        </button>
                                    </div>
                                </div>
                            </div>`
    cart_content.appendChild(itemInCart);



    var plus1 = document.querySelector('.plus1');
    var minus1 = document.querySelector('.minus1');
    var change1a = document.querySelector('.change1a');
    var change2a = document.querySelector('.change2a');
    plus1.addEventListener('click', () => {
        count1++;
        if (count1 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1a.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count1}</span>`
            change2a.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count1 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus1.addEventListener('click', () => {
        count1--;
        if (count1 == -1) {
            count1++;
        }
        else {
            change1a.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count1}</span>`;
            change2a.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count1 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[1].addEventListener('click', () => {
    var pro = atc[1].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count2}`, parseInt(atc[1].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart2">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1b">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count2}</span></h3>
                                            <h3 class = "change2b">Total Price:&nbsp;&nbsp;<span class="pri">${count2 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count2}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus2 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus2 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus2 = document.querySelector('.plus2');
    var minus2 = document.querySelector('.minus2');
    var change1b = document.querySelector('.change1b');
    var change2b = document.querySelector('.change2b');
    plus2.addEventListener('click', () => {
        count2++;
        if (count2 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count2--;
        }
        else {
            change1b.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count2}</span>`
            change2b.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count2 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus2.addEventListener('click', () => {
        count2--;
        if (count2 == -1) {
            count2++;
        }
        else {
            change1b.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count2}</span>`;
            change2b.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count2 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[2].addEventListener('click', () => {
    var pro = atc[2].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count3}`, parseInt(atc[2].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart3">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1c">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count3}</span></h3>
                                            <h3 class = "change2c">Total Price:&nbsp;&nbsp;<span class="pri">${count3 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count3}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus3 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus3 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus3 = document.querySelector('.plus3');
    var minus3 = document.querySelector('.minus3');
    var change1c = document.querySelector('.change1c');
    var change2c = document.querySelector('.change2c');
    plus3.addEventListener('click', () => {
        count3++;
        if (count3 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1c.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count3}</span>`
            change2c.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count3 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus3.addEventListener('click', () => {
        count3--;
        if (count3 == -1) {
            count3++;
        }
        else {
            change1c.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count3}</span>`;
            change2c.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count3 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[3].addEventListener('click', () => {
    var pro = atc[3].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count4}`, parseInt(atc[3].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart4">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1d">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count4}</span></h3>
                                            <h3 class = "change2d">Total Price:&nbsp;&nbsp;<span class="pri">${count4 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count4}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus4 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus4 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus4 = document.querySelector('.plus4');
    var minus4 = document.querySelector('.minus4');
    var change1d = document.querySelector('.change1d');
    var change2d = document.querySelector('.change2d');
    plus4.addEventListener('click', () => {
        count4++;
        if (count4 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1d.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count4}</span>`
            change2d.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count4 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus4.addEventListener('click', () => {
        count4--;
        if (count4 == -1) {
            count4++;
        }
        else {
            change1d.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count4}</span>`;
            change2d.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count4 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[4].addEventListener('click', () => {
    var pro = atc[4].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count5}`, parseInt(atc[4].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart5">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1e">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count5}</span></h3>
                                            <h3 class = "change2e">Total Price:&nbsp;&nbsp;<span class="pri">${count5 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count5}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus5 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus5 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus5 = document.querySelector('.plus5');
    var minus5 = document.querySelector('.minus5');
    var change1e = document.querySelector('.change1e');
    var change2e = document.querySelector('.change2e');
    plus5.addEventListener('click', () => {
        count5++;
        if (count5 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1e.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count5}</span>`
            change2e.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count5 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus5.addEventListener('click', () => {
        count5--;
        if (count5 == -1) {
            count5++;
        }
        else {
            change1e.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count5}</span>`;
            change2e.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count5 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[5].addEventListener('click', () => {
    var pro = atc[5].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count6}`, parseInt(atc[5].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart6">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1f">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count6}</span></h3>
                                            <h3 class = "change2f">Total Price:&nbsp;&nbsp;<span class="pri">${count6 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count6}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus6 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus6 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus6 = document.querySelector('.plus6');
    var minus6 = document.querySelector('.minus6');
    var change1f = document.querySelector('.change1f');
    var change2f = document.querySelector('.change2f');
    plus6.addEventListener('click', () => {
        count6++;
        if (count6 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1f.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count6}</span>`
            change2f.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count6 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus6.addEventListener('click', () => {
        count6--;
        if (count6 == -1) {
            count6++;
        }
        else {
            change1f.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count6}</span>`;
            change2f.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count6 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[6].addEventListener('click', () => {
    var pro = atc[6].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count7}`, parseInt(atc[6].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart7">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1g">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count7}</span></h3>
                                            <h3 class = "change2g">Total Price:&nbsp;&nbsp;<span class="pri">${count7 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count7}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus7 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus7 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus7 = document.querySelector('.plus7');
    var minus7 = document.querySelector('.minus7');
    var change1g = document.querySelector('.change1g');
    var change2g = document.querySelector('.change2g');
    plus7.addEventListener('click', () => {
        count7++;
        if (count7 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1g.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count7}</span>`
            change2g.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count7 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus7.addEventListener('click', () => {
        count7--;
        if (count7 == -1) {
            count7++;
        }
        else {
            change1g.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count7}</span>`;
            change2g.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count7 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[7].addEventListener('click', () => {
    var pro = atc[7].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count8}`, parseInt(atc[7].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart8">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1h">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count8}</span></h3>
                                            <h3 class = "change2h">Total Price:&nbsp;&nbsp;<span class="pri">${count8 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count8}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus8 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus8 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus8 = document.querySelector('.plus8');
    var minus8 = document.querySelector('.minus8');
    var change1h = document.querySelector('.change1h');
    var change2h = document.querySelector('.change2h');
    plus8.addEventListener('click', () => {
        count8++;
        if (count8 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1h.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count8}</span>`
            change2h.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count8 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus8.addEventListener('click', () => {
        count8--;
        if (count8 == -1) {
            count8++;
        }
        else {
            change1h.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count8}</span>`;
            change2h.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count8 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[8].addEventListener('click', () => {
    var pro = atc[8].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count9}`, parseInt(atc[8].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart9">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1i">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count9}</span></h3>
                                            <h3 class = "change2i">Total Price:&nbsp;&nbsp;<span class="pri">${count9 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count9}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus9 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus9 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus9 = document.querySelector('.plus9');
    var minus9 = document.querySelector('.minus9');
    var change1i = document.querySelector('.change1i');
    var change2i = document.querySelector('.change2i');
    plus9.addEventListener('click', () => {
        count9++;
        if (count9 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1i.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count9}</span>`
            change2i.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count9 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus9.addEventListener('click', () => {
        count9--;
        if (count9 == -1) {
            count9++;
        }
        else {
            change1i.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count9}</span>`;
            change2i.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count9 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[9].addEventListener('click', () => {
    var pro = atc[9].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count10}`, parseInt(atc[9].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart10">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1j">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count10}</span></h3>
                                            <h3 class = "change2j">Total Price:&nbsp;&nbsp;<span class="pri">${count10 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count10}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus10 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus10 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus10 = document.querySelector('.plus10');
    var minus10 = document.querySelector('.minus10');
    var change1j = document.querySelector('.change1j');
    var change2j = document.querySelector('.change2j');
    plus10.addEventListener('click', () => {
        count10++;
        if (count10 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1j.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count10}</span>`
            change2j.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count10 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus10.addEventListener('click', () => {
        count10--;
        if (count10 == -1) {
            count10++;
        }
        else {
            change1j.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count10}</span>`;
            change2j.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count10 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[10].addEventListener('click', () => {
    var pro = atc[10].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count11}`, parseInt(atc[10].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart11">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1k">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count11}</span></h3>
                                            <h3 class = "change2k">Total Price:&nbsp;&nbsp;<span class="pri">${count11 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count11}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus11 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus11 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus11 = document.querySelector('.plus11');
    var minus11 = document.querySelector('.minus11');
    var change1k = document.querySelector('.change1k');
    var change2k = document.querySelector('.change2k');
    plus11.addEventListener('click', () => {
        count11++;
        if (count11 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1k.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count11}</span>`
            change2k.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count11 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus11.addEventListener('click', () => {
        count11--;
        if (count11 == -1) {
            count11++;
        }
        else {
            change1k.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count11}</span>`;
            change2k.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count11 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[11].addEventListener('click', () => {
    var pro = atc[11].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count12}`, parseInt(atc[11].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart12">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1l">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count12}</span></h3>
                                            <h3 class = "change2l">Total Price:&nbsp;&nbsp;<span class="pri">${count12 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count12}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus12 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus12 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus12 = document.querySelector('.plus12');
    var minus12 = document.querySelector('.minus12');
    var change1l = document.querySelector('.change1l');
    var change2l = document.querySelector('.change2l');
    plus12.addEventListener('click', () => {
        count12++;
        if (count12 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1l.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count12}</span>`
            change2l.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count12 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus12.addEventListener('click', () => {
        count12--;
        if (count12 == -1) {
            count12++;
        }
        else {
            change1l.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count12}</span>`;
            change2l.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count12 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[12].addEventListener('click', () => {
    var pro = atc[12].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count13}`, parseInt(atc[12].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart13">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1m">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count13}</span></h3>
                                            <h3 class = "change2m">Total Price:&nbsp;&nbsp;<span class="pri">${count13 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count13}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus13 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus13 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus13 = document.querySelector('.plus13');
    var minus13 = document.querySelector('.minus13');
    var change1m = document.querySelector('.change1m');
    var change2m = document.querySelector('.change2m');
    plus13.addEventListener('click', () => {
        count13++;
        if (count13 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1m.innerHTML = `Total Number Of This Item:&nbsp;&nbsp<span class="count">;${count13}</span>`
            change2m.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count13 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus13.addEventListener('click', () => {
        count13--;
        if (count13 == -1) {
            count13++;
        }
        else {
            change1m.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count13}</span>`;
            change2m.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count13 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[13].addEventListener('click', () => {
    var pro = atc[13].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count14}`, parseInt(atc[13].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart14">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1n">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count14}</span></h3>
                                            <h3 class = "change2n">Total Price:&nbsp;&nbsp;<span class="pri">${count14 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count14}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus14 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus14 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus14 = document.querySelector('.plus14');
    var minus14 = document.querySelector('.minus14');
    var change1n = document.querySelector('.change1n');
    var change2n = document.querySelector('.change2n');
    plus14.addEventListener('click', () => {
        count14++;
        if (count14 == 6) {
            alert("You Cannot Purchase More Than 5 Same Items.");
            count1--;
        }
        else {
            change1n.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count14}</span>`
            change2n.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count14 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus14.addEventListener('click', () => {
        count14--;
        if (count14 == -1) {
            count14++;
        }
        else {
            change1n.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count14}</span>`;
            change2n.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count14 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[14].addEventListener('click', () => {
    var pro = atc[14].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count15}`, parseInt(atc[14].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart15">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1o">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count15}</span></h3>
                                            <h3 class = "change2o">Total Price:&nbsp;&nbsp;<span class="pri">${count15 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count15}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus15 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus15 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus15 = document.querySelector('.plus15');
    var minus15 = document.querySelector('.minus15');
    var change1o = document.querySelector('.change1o');
    var change2o = document.querySelector('.change2o');
    plus15.addEventListener('click', () => {
        count15++;
        if (count15 == 6) {
            alert("You Cannot Purchase More Than 10 Same Items.");
            count1--;
        }
        else {
            change1o.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count15}</span>`
            change2o.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count15 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus15.addEventListener('click', () => {
        count15--;
        if (count15 == -1) {
            count15++;
        }
        else {
            change1o.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count15}</span>`;
            change2o.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count15 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





atc[15].addEventListener('click', () => {
    var pro = atc[15].parentElement.querySelector('.atc_btn').getAttribute('id');
    localStorage.setItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count16}`, parseInt(atc[15].parentElement.querySelector('.price').textContent));
    var itemInCart = document.createElement('div');
    parseInt(pro);
    if (pro[3] == 0 && pro[4] == 0) {
        random = pro[5];
    }
    else if (pro[3] == 0) {
        random = 10 * pro[4] + parseInt(pro[5]);
    }
    else {
        random = 100 * pro[3] + 10 * pro[4] + parseInt(pro[5]);
    }
    itemInCart.innerHTML = `<div class = "cart_flex" id="cart16">
                                    <img class = "cart_image" src="images/img${random}.jpg" alt="handbag image">
                                    <div class = "cart_block">
                                        <div>
                                            <h3><strong>Product-Id:&nbsp;&nbsp;TTF${pro[3]}${pro[4]}${pro[5]}</strong></h2>
                                            <h3 class = "change1p">Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count16}</span></h3>
                                            <h3 class = "change2p">Total Price:&nbsp;&nbsp;<span class="pri">${count16 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} ${count16}`)}</span>/-</h3>
                                        </div>
                                        <div>
                                            <button class="minus16 cart-btns">
                                                <img src="images/minus.png" alt="close">
                                            </button>
                                        </div>
                                        <div>
                                            <button class="plus16 cart-btns">
                                                <img src="images/plus.png" alt="close">
                                            </button>
                                        </div>
                                    </div>
                                </div>`
    cart_content.appendChild(itemInCart);



    var plus16 = document.querySelector('.plus16');
    var minus16 = document.querySelector('.minus16');
    var change1p = document.querySelector('.change1p');
    var change2p = document.querySelector('.change2p');
    plus16.addEventListener('click', () => {
        count16++;
        if (count16 == 6) {
            alert("You Cannot Purchase More Than 10 Same Items.");
            count1--;
        }
        else {
            change1p.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count16}</span>`
            change2p.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count16 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`
        }
    })

    minus16.addEventListener('click', () => {
        count16--;
        if (count16 == -1) {
            count16++;
        }
        else {
            change1p.innerHTML = `Total Number Of This Item:&nbsp;&nbsp;<span class="count">${count16}</span>`;
            change2p.innerHTML = `Total Price:&nbsp;&nbsp;<span class="pri">${count16 * localStorage.getItem(`Product-Id: ${pro[3]}${pro[4]}${pro[5]} 1`)}</span>/-`;
        }
    })
})





// Save Button

var save_btn = document.querySelector('.save_btn');
var arr = [];
var a = 0;
var b = 0;
save_btn.addEventListener('click', () => {
    if (confirm("Are You Sure You Want To Save All The Items In Your Cart?")) {
        var cart_length = open.children[5].children.length;
        for (var i = 0; i < cart_length; i++) {
            var save_id1 = open.children[5].children[i].querySelector('.cart_block').firstElementChild.firstElementChild.textContent[16];
            var save_id2 = open.children[5].children[i].querySelector('.cart_block').firstElementChild.firstElementChild.textContent[17];
            var save_id3 = open.children[5].children[i].querySelector('.cart_block').firstElementChild.firstElementChild.textContent[18];
            var count_item = open.children[5].children[i].querySelector('.cart_block').firstElementChild.firstElementChild.nextElementSibling.querySelector('.count').textContent;
            var save_price = open.children[5].children[i].querySelector('.cart_block').firstElementChild.lastElementChild.querySelector('.pri').textContent;
            arr[a] = `${save_id1}${save_id2}${save_id3}-${count_item}-${parseInt(save_price)}`
            a++;
        }
        var pan = arr[0];
        var ran = 100 * pan[0] + 10 * pan[1] + parseInt(pan[2]);
        console.log(ran)

        if (ran <= 16) {
            localStorage.setItem('list0', JSON.stringify(arr));
        }

        else if (ran > 16  &&  ran <= 32) {
            localStorage.setItem('list1', JSON.stringify(arr));
        }

        else if (ran > 32  &&  ran <= 48) {
            localStorage.setItem('list2', JSON.stringify(arr));
        }

        else if (ran > 48  &&  ran <= 64) {
            localStorage.setItem('list3', JSON.stringify(arr));
        }

        else if (ran > 64  &&  ran <= 80) {
            localStorage.setItem('list4', JSON.stringify(arr));
        }

        else if (ran > 80  &&  ran <= 96) {
            localStorage.setItem('list5', JSON.stringify(arr));
        }

        else if (ran > 96  &&  ran <= 112) {
            localStorage.setItem('list6', JSON.stringify(arr));
        }

        else if (ran > 112  &&  ran <= 128) {
            localStorage.setItem('list7', JSON.stringify(arr));
        }


        alert("Your Cart Items Are Saved Successfully.\nNow You Can Explore Our Other Authentic Collections  OR  Can Directly Proceed With The Order.");
        location.reload();
    }
})
