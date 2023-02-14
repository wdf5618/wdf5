//UI
const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);

buttons.forEach(button=>{
    // console.log(button);

    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log('i am working');

        const cx = e.clientX; // exactly point of X-axis
        const cy = e.clientY; // exactly point of Y-axis
        // console.log(cy);

        const btntop = e.target.offsetTop; //point of border Y-axis (not change value)
        const btnleft = e.target.offsetLeft; //point of border X-axis (not change value)
        // console.log(btnleft);

        const xinside = cx-btnleft; 
        const yinside = cy-btntop;
        // console.log(xinside,yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yinside+"px";
        circle.style.left = xinside+"px";
        // console.log(circle);

        // console.log(e.target);
        // e.target.appendChild(circle); //button(e.target)
        this.appendChild(circle);
        // this can work only regular function , can't work => function

        setTimeout(()=>{
            circle.remove();
        },600);

    });
});
