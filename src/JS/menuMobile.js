const mobileButton = document.getElementById('mobileButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileButton.addEventListener('click', () =>{
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.add("cursor-pointer");
});

mobileMenu.addEventListener('click', () =>{
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.remove("cursor-pointer");
})