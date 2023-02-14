// UI
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const smallcups = document.querySelectorAll('.cup-small');

// console.log(smallcups);

smallcups.forEach((smallcup,idx)=>{
    // console.log(smallcup);
    smallcup.addEventListener('click',()=>highlightcups(idx));
});

function highlightcups(idx){
    // console.log(`i am idx1 = ${idx}`);

    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full') ){
        idx--;
    }

    smallcups.forEach((cup,idx2)=>{

        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }

    });

    updatebigcup();

}


function updatebigcup(){
    const getfullcups = document.querySelectorAll('.cup-small.full');
    // console.log(getfullcups.length);
    const totalfullcups = getfullcups.length;
    // console.log(totalfullcups);


    const totalcups = smallcups.length;

    if(totalfullcups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = "visible";
        percentage.style.height = `${totalfullcups/totalcups * 330}px`;
        percentage.innerText = `${totalfullcups/totalcups * 100}%`;
    }
    
    if(totalfullcups === totalcups){
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    }else{
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * totalfullcups / 1000)}L`;
    }
}