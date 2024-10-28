function openCard() {
    const card = document.getElementById("card");
    card.style.maxHeight = "600px"; 
    card.style.padding = "20px"; 
    card.style.opacity = "1"; 
}

function closeCard() {
    const card = document.getElementById("card");
    card.style.maxHeight = "0"; 
    card.style.padding = "0 20px"; 
    card.style.opacity = "0"; 
}
