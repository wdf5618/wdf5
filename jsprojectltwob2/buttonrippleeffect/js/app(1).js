//UI
//
const buttons = document.querySelectorAll('.btnripple');
//NodeListနဲ့ ထွက်
//NodeListက pure listဖြစ်လို့ forEachနဲ့ ဖမ်းလို့ရ
// console.log(buttons);

buttons.forEach(button=>{
    // console.log(button);

    button.addEventListener('click',function(e){
        // console.log('i am working');

        //For window's x axis
        const cx = e.clientX;
        // console.log(cx);
        //For window's y axis
        const cy = e.clientY;
        // console.log(cy);

        //For btn's top from window
        const btntop = e.target.offsetTop;
        //For btn's left from window
        const btnleft = e.target.offsetLeft;
        // console.log(btnleft);

        //clickခေါက်တဲ့ px အတိအကျသိချင်လို့
        const xinside = cx-btnleft;
        const yinside = cy-btntop;
        // console.log(xinside,yinside);

        //circle effectတွေ ထည့်ချင်လို့
        //createElementနဲ့ span elementကို createလုပ် > circle variableထဲ ထည်.
        const circle = document.createElement('span');
        //span elementရဲ့ classမှာ "circle" class nameထည့်
        //CSSမှာ circle classအတွက် effectတွေ ထည့်ပြီးသားဖြစ်လို့ "circle" class nameပဲပေး
        circle.classList.add('circle');
        //circle effectရဲ့ positionကို clickတဲ့ အတိုင်း ပြောင်းရန် yinside,xinsideထည့်, unitထည့်ပေးရမည်
        //CSSမှာ ရှိတဲ့ top, leftကို ပြင်မှာဖြစ်လို့ .styleနဲ့ခေါ်
        circle.style.top = yinside+"px";
        circle.style.left = xinside+"px";
        //console.log(circle);

        //buttonကို ခေါ်ချင်လို့ e.targetနဲ့ခေါ်
        // console.log(e.target);
        //button elementမှာ child span elementကို ခေါ်
        //eventမှာ targetထည့်ရတာက eventက objဖြစ်နေလို့
        // e.target.appendChild(circle);
        
        //regular functionနဲ့ ရေးထားရင် thisနဲ့ခေါ်လို့ရ
        this.appendChild(circle);

        //circleက ကိုယ့်ဘာသာဖျက်
        setTimeout(()=>{
            circle.remove();
        },600);
    });
});
