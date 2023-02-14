//UI
const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');

const loanform = document.getElementById('loan-form');
const loader = document.getElementById('loading');
const resultel = document.getElementById('result');

// Event Listener  
terms.addEventListener('input',function(){
    const val = terms.value;
    bubble.textContent = val > 1 ? `${val} Months` : `${val} Month`;
    
});


loanform.addEventListener('submit',function(e){
    // console.log('hay');

    // hide result 
    resultel.style.display="none";

    // show loader
    loader.style.display="block";

    setTimeout(calculateresult,1000);
    

    e.preventDefault();

});


// Calculate Result 
function calculateresult(){
    // console.log('calculating...');

    //UI
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');

    const monthlypayment = document.getElementById('monthly-payment');
    const totalinterset = document.getElementById('total-interest');
    const totalpayment = document.getElementById('total-payment');

    const getprincipal = parseFloat(amount.value);
    const getinterest = parseFloat(interest.value);
    const getterm = parseFloat(terms.value);
    // console.log(getterm);


    //Comput all monthly payment
    const monthly = Math.round((getprincipal*(getterm*getinterest))/100);
    // console.log(monthly);

    if (monthly){
        monthlypayment.value = ((getprincipal+monthly)/getterm).toFixed(2);
        totalinterset.value = monthly.toFixed(2);
        totalpayment.value = (monthlypayment.value*getterm).toFixed(2);
        // console.log(monthlypayment);

        //Hide Result
        loader.style.display="none";

        // Show Result 
        resultel.style.display="block";

    }else{

        // console.log('Please check your number');
        showerror('Please check your number');


    }


    // Show Error 
    function showerror(message){
        // hide loader 
        loader.style.display="none";
        
        // create element 
        const errordiv = document.createElement('div');
        // add class 
        errordiv.className="alert alert-danger";
        //add text node
        errordiv.appendChild(document.createTextNode(message));
        // console.log(errordiv);

        // get elements 
        const card = document.querySelector('.card');
        const heading = document.getElementById('heading');

        // insert error above heading 
        card.insertBefore(errordiv,heading);

        // clear errordiv after display 

        
    }

}

function clearerror() {
    
}