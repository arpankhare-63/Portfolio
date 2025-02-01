let scrollleft=document.querySelector('#scroll-left');
let scrollright=document.querySelector('#scroll-right');
let tabs=document.querySelector(".project-tabs");
scrollleft.addEventListener('click', function(){
tabs.scrollBy({left: -400,behavior:"smooth"});

});
scrollright.addEventListener('click', function(){
tabs.scrollBy({left: 400, behavior:"smooth"});
});




let form = document.querySelector('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
    
});