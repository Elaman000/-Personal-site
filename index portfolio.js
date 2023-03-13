img.onclick = openBack
let a = 0
function openBack() {
    if(a === 0){
        input.classList.add('inp')
        a = a + 1
        img.src = 'img/x-light.png'
    }else{
        input.classList.remove('inp')
        a = 0
        img.src = 'img/Frame.png'
    }
    
}

let lii = document.querySelectorAll('#li')
li[0].classList.add('box')
for(const li of lii) {
    li.addEventListener('click', () => {
        clearActiveClasses()
        li.classList.add('box')
        let poiskIte = document.querySelectorAll('.blok')
        poiskIte.forEach(function(elem){
            if(elem.children[1].innerText === li.innerText || li.innerText === 'Everything'){
                elem.classList.remove('hide')
            }else{
                elem.classList.add('hide')
            }
        });
    })
}

function clearActiveClasses() {
    lii.forEach((li) =>{
        li.classList.remove('box')
    })
}

document.querySelector('#input').oninput = function(){
    let poiskItem = document.querySelectorAll('.blok')
    let val = this.value.trim();
    if(val != ''){
        poiskItem.forEach(function(elem){
            console.log(elem.children[2])
            if(elem.children[2].innerText.search(val) == -1){
                elem.classList.add('hide')
            }else{
                elem.classList.remove('hide')
            } 
        });
    }else{
        poiskItem.forEach(function(elem){
                elem.classList.remove('hide')
        });
    }
}
let eee= 0
// panel2.onclick = function(){
//     eee = 1
//     openBackBurgerMenu()
// }
burgerMenu.onclick = openBackBurgerMenu
function openBackBurgerMenu() {
    let panel = document.getElementById('panel')
    if(eee === 0){
        panel.style.left = '0px'
        bugerMenuImg.src = 'img/Backc menu.png'
        eee = 1
    }else{
        panel.style.left = '-250px'
        bugerMenuImg.src = 'img/open menu.png'
        eee = 0
    }
}