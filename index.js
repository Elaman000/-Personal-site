/*************************
 ** Разделы на загаловке**
 ************************/ 
 btn_otryt.onclick = otryt
function otryt() {
    burger_menu.classList.add('animation')
}
btn_zakryt.onclick = zakryt
function zakryt() {
    burger_menu.classList.remove('animation')
}
// Кнопки раздела
    hd1.onclick = btt1 
    function btt1() {
        hd4.classList.remove('click')
        hd3.classList.remove('click')
        hd2.classList.remove('click')
        hd1.classList.add('click')
    }
    hd2.onclick = btt2
    function btt2() {
        hd4.classList.remove('click')
        hd3.classList.remove('click')
        hd2.classList.add('click')
        hd1.classList.remove('click')
    }
    hd3.onclick = btt3
    function btt3() {
        hd4.classList.remove('click')
        hd3.classList.add('click')
        hd2.classList.remove('click')
        hd1.classList.remove('click')
    }
    hd4.onclick = btt4
    function btt4() {
        hd4.classList.add('click')
        hd3.classList.remove('click')
        hd2.classList.remove('click')
        hd1.classList.remove('click')
    }
    hd5.onclick = btt5
    function btt5() {
        hd5.classList.add('click')
        hd4.classList.remove('click')
        hd3.classList.remove('click')
        hd2.classList.remove('click')
        hd1.classList.remove('click')
    }
    //let portfolio = document.getElementById('portfolio')
    // const right_pf =document.getElementById('btn_right_pf')
    // const left_pf = document.getElementById('btn_left_pf')

    // let tt = 0
    // right_pf.onclick = portfoli && tt++
    // left_pf.onclick = portfoli && tt--
    // function portfoli() {
    //     for (let i = 0; i <portfoli.length; i++) {
    //         portfoli[i].classList.remove('back')
    //         portfoli[i].classList.remove('active')
    //         portfoli[i].classList.remove('before')
    //     }

    // }



    const slider = document.querySelector(".portfolio_pf");
	const slides = document.querySelectorAll(".conteiner_pf");
	const button = document.querySelectorAll(".button-port");
	let current = 0;
	let prev = 3;
	let next = 1;

for (let i = 0; i < button.length; i++){
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);
const gotoNum = number =>{
	current = number;
	prev = current - 1;
	next = current + 1;
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("back");
		slides[i].classList.remove("before");
    }
	if(next == 3) {
		next = 0;
	}
	if(prev == -1){
	    prev = 2;
	}
    
	slides[current].classList.add("active");
	slides[next].classList.add("before");
	slides[prev].classList.add("back");
}





const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
    anchor.addEventListener('click', function(eventt){
        burger_menu.classList.remove('animation')
        eventt.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}