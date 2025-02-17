const tableView = document.querySelector("table");
const cardView = document.querySelector(".task-container");
const showTableBtn = document.querySelector(".box24");
const showCardsBtn = document.querySelector(".box25");

tableView.style.display = "table";
cardView.style.display = "none";
showTableBtn.style.color = "blue"; 
showCardsBtn.style.color = "gray";  

showTableBtn.onclick = function () {
    tableView.style.display = "table";
    cardView.style.display = "none";

    showTableBtn.style.color = "blue";  
    showCardsBtn.style.color = "gray"; 
};

showCardsBtn.onclick = function () {
    tableView.style.display = "none";
    cardView.style.display = "grid";

    showTableBtn.style.color = "gray"; 
    showCardsBtn.style.color = "blue"; 
};