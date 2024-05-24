document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    console.log("Menu Toggle Button:", menuToggle);
    console.log("Navigation Menu:", nav);

    menuToggle.addEventListener("click", () => {
        console.log("Toggle button clicked");
        menuToggle.classList.toggle("open");
        nav.classList.toggle("open");
    });

    document.getElementById('back-to-top').onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});
function sendMessage(){
    alert("Thanks for contacting us,your message will be replied soon..")
}
