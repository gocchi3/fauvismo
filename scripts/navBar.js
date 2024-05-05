    document.addEventListener("DOMContentLoaded", function() {
        var artistasLink = document.querySelector("#navbarDropdown");
        var dropdownMenu = document.querySelector(".dropdown-menu");
    
        artistasLink.addEventListener("click", function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle("show");
        });
    });
