const searchicon1 = document.querySelector ('#searchicon1');
const srchicon1 = document.querySelector ('#srchicon1');
const search1 = document.querySelector ('#searchinput1');
searchicon1.addEventListener('click' , function() {
search1.style.display = 'flex';
searchicon1.style.display = 'none';
});

const searchIcon2 = document.querySelector ('#searchicon2');
const srchcIon2 = document.querySelector ('#srchicon');
const search2 = document.querySelector ('#searchinput2');
searchIcon2.addEventListener ("click", function() {
    search2.style.display = 'flex'
    searchIcon2.style.display = 'none'
    });


const bar = document.querySelector ('.fa-bars');
const cross = document.querySelector ('#hdcross');
const headerbar = document.querySelector ('.headerbar')

bar.addEventListener ('click' , function(){
    setTimeout ( () => {
        cross.style.display = 'block';

    },200)
    headerbar.style.right = '0%'
})

cross.addEventListener ('click' , function () {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

let user = document.getElementById ("user");
user.addEventListener("click", function() {
    document.querySelector ('.loginPage').classList.toggle("active1");

    
})