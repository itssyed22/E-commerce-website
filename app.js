window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("back-to-top").style.display = "block";
            } else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }

        
        document.getElementById('back-to-top').onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

       
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("open");
        nav.classList.toggle("open");
    });
});


function sendMessage(){
    alert("Thanks for Contacting us, your message will be replied soon.")
}
