// Responsiveness

        var navItems = document.getElementById("navItems");
        var mobileNav = document.getElementById("mobileNav");
        var hamburger = document.getElementById("hamburger");


        function adjustNavbar() {
            screenWidth = parseInt(window.innerWidth);

            if (screenWidth < 541) {
                navItems.style.display = "none";
                hamburger.style.display = "flex";
            }
            else {
                navItems.style.display = "flex";
                hamburger.style.display = "none";
            }
        }

        adjustNavbar();

        window.addEventListener("resize", adjustNavbar);

        hamburger.addEventListener("click", function () {
            mobileNav.classList.toggle("left-[-70%]");
            hamburger.classList.toggle("fa-bars");
            hamburger.classList.toggle("fa-close");
        })
 



    

// form

const scriptURL = 'https://script.google.com/macros/s/AKfycbwHv-d1FSQddl-ClTD4WjPc4C8afmhToHksBN1CVDRCP8oTnjy4kJYxWy-bfdLKuLAi/exec'
const form = document.querySelector("#form")
const btn = document.querySelector("#submit")

var allInputs = document.querySelectorAll('input');
 

form.addEventListener('submit', e => {
 e.preventDefault()
  btn.disabled = true
  btn.innerHTML = "Adding your business..."

 let requestBody = new FormData(form)
 fetch(scriptURL, {method: 'POST', body: requestBody})

   .then(response => {
     btn.disabled = false 
     btn.innerHTML = "Register your Business"
     
     alert('Thank you for registering your business', response)})
     btn.disabled=false
     // clear all input
     allInputs.forEach(singleInput => singleInput.value = '')

   .catch(error => {
     btn.disabled = false
     btn.innerHTML = "Register your business"
 
   alert('Sorry, Please try again!', error.message)})
   btn.disabled = false

})
  
// 
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('opacity-100');
    }else{
      entry.target.classList.remove('opacity-100');
    }
  });
});
  

const hiddenElements = document.querySelectorAll('.opacity-0');
hiddenElements.forEach((el) => observer.observe(el));

// reveal on scroll

// define Get any element that has a container id and put it in the containers variable
// const containers = document.querySelectorAll('#container')
// // intersection observer constructor to define what we want it to do
// const observer = new IntersectionObserver(entries => {
// entries.forEach(entry => {
// entry.target.classList.toggle('opacity-100', entry.isIntersecting)
// if(entry.isIntersecting) observer.unobserve(entry.target)
// });
// }, {threshold : 0.5})
// // observe very element in the containers variable
// containers.forEach(container => {
// observer.observe(container)
// })