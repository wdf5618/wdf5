//UI
const body = document.body;
const slides = document.querySelectorAll('.slide');

const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let activeslide = 0;

function setbgbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

setbgbody();


// remove slide 
function setactiveslide(){
    // remove active from all slide
    slides.forEach(slide => slide.classList.remove('active'));

    // add active in current slide 
    slides[activeslide].classList.add('active');

}


rightbtn.addEventListener('click', ()=>{
    // console.log('i am right');

    activeslide++;

    if(activeslide > slides.length - 1){
        activeslide = 0;
    }

    console.log(activeslide);

    setbgbody();
    setactiveslide();
});

leftbtn.addEventListener('click', ()=>{
    // console.log('i am left');

    activeslide--;

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    console.log(activeslide);

    setbgbody();
    setactiveslide();
});