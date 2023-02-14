//UI
const btns = document.querySelector('.btns');
const btnprimary = document.getElementById('btnprimary');

// Event Listener 
btnprimary.addEventListener('click',()=>{
    // console.log('hay');

    btns.classList.toggle('show');
    // console.log('work');
});