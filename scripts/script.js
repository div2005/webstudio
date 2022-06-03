var openOrderModal = document.getElementById("openOrderModal");
var fakeOrderButton = document.getElementById("fakeOrderButton");
var orderModal = document.getElementById("orderModal")
var modalBackground = document.getElementById("modalBackground")

function changeModalStatus() {
    
    
    if (modalBackground.style.display == 'flex') {
        modalBackground.style.display = "none";
        document.body.style.overflow = "auto"
    } else {
        modalBackground.style.display = "flex";
        document.body.style.overflow = "hidden"
    }

    
}

var navPages = document.getElementById("navPages")
