// // UI
// // Start Navbar
// const navbuttons = document.querySelector('.navbuttons');
// navbuttons.addEventListener('click', ()=>navbuttons.classList.toggle('changes'));

// // for navbar
// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll', ()=> {
//     const getscrolly = window.scrollY;
//     if(getscrolly >= 200) {
//         navbar.classList.add('navmenus');
//     } else {
//         navbar.classList.remove('navmenus');
//     }
// });
// // End Navbar

// //Start Gallery Section 
// const gallerylists = document.querySelectorAll('.gallerylists');
// const filternews = document.querySelectorAll('.filters.new');
//     filterfrees = document.querySelectorAll('.filters.free');
//     filterpros = document.querySelectorAll('.filters.pro');

// gallerylists.forEach((gallerylist)=>{
//     // console.log(gallerylist);

//     let datafilter = gallerylist.getAttribute('data-filter');
//     // console.log(datafilter);

//     gallerylist.addEventListener('click', (e)=>{
//      // console.log('hay');

//     //  e.target.classList.add('activeitems');
//     removeactiveitem();
//         e.target.classList.add('activeitems');

//     if(datafilter === "all"){
//         filternews.forEach(filternew=>{
//             filternew.style.display = "inline-block";
//         })

//         filterfrees.forEach(filterfree=>{
//             filterfree.style.display = "inline-block";
//         });

//         filternews.forEach(filterpro=>{
//             filterpro.style.display = "inline-block";
//         });

        

//     }else if(datafilter === "new"){
//         filternews.forEach(filternew=>{
//             filternew.style.display = "inline-block";
//         })

//         filterfrees.forEach(filterfree=>{
//             filterfree.style.display = "none";
//         });

//         filternews.forEach(filterpro=>{
//             filterpro.style.display = "none";
//         });

//     }else if(datafilter === "free"){
//         filternews.forEach(filternew=>{
//             filternew.style.display = "none";
//         })

//         filterfrees.forEach(filterfree=>{
//             filterfree.style.display = "inline-block";
//         });

//         filternews.forEach(filterpro=>{
//             filterpro.style.display = "none";
//         });

//     }else{
//         filternews.forEach(filternew=>{
//             filternew.style.display = "none";
//         })

//         filterfrees.forEach(filterfree=>{
//             filterfree.style.display = "none";
//         });

//         filternews.forEach(filterpro=>{
//             filterpro.style.display = "inline-block";
//         });

//     }

//     });

// });

// // remove cuuent active item 
// function removeactiveitem(){
//     gallerylists.forEach(gallerylist=>{
//         gallerylist.classList.remove('activeitems');
//     })
    
// }


// Start Footer Section 
// const showyear = document.getElementById('showyear');
// const getfullyear = new Date().getUTCFullYear();

// showyear.textContent = getfullyear;
// End Footer Section 