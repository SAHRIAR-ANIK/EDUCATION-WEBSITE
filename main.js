const fifth = document.querySelectorAll ('.fifthitem');

fifth.forEach(fifthitem => { 

fifthitem.addEventListener('click', () => {

fifthitem.classList.toggle('open'); 

const icon = fifthitem.querySelector ('.plus i'); 

if(icon.className === 'fas fa-plus'){

icon.className = "fas fa-minus"
}

else {
icon.className = "fas fa-plus";
} 

})   

})


$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
0:{
items:1
},
70:{
items:1
},
1000:{
items:2
}
}
})










