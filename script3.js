var sub = document.querySelector('.btn1');
var res = document.querySelector('.btn2');

sub.addEventListener('click', (e) => {
    if(!(confirm('Are You Sure You Wish To Submit These Details?'))){
        e.preventDefault();
    }
})

res.addEventListener('click', (e) => {
    if(!(confirm('Are You Sure You Want To Reset This Text?'))){
        e.preventDefault();
    }
})