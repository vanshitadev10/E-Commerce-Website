function hide() {
    let btn = document.getElementById('call');
    let num = document.getElementById('number');
    if (number.style.display != 'block') {
        number.style.display = 'block';
    }
    else {
        number.style.display = 'none';
    }
}


var sub = document.querySelector('.btn3');

sub.addEventListener('click', (e) => {
    if(!(confirm('Are You Sure You Wish To Submit These Details?'))){
        e.preventDefault();
    }
})
