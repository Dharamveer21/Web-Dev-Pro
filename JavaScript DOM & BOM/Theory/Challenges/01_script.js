// This arrow function gives me this as the window object or global object
document.getElementById('changeTextButton').addEventListener('click', () => {
    console.log(this);
});

// This normal function gives me this as the button who calls the event
document.getElementById('changeTextButton').addEventListener('click', function () {
    console.log(this);
});

// Example 1
document.getElementById('changeTextButton').addEventListener('click', function () {
    let paragraph = document.getElementById('myParagraph');

    paragraph.textContent = "Paragraph is changed";
});

// Example 2
document.getElementById('highlightFirstCity').addEventListener('click', function () {
    let citiesList = document.getElementById('citiesList');

    citiesList.firstElementChild.classList.add('highlight');
});

// Example 3
document.getElementById('changeOrder').addEventListener('click', function () {
    let coffeeType = document.getElementById('coffeeType');

    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";
});

// Example 4
document.getElementById('addNewItem').addEventListener('click', function () {

    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";

    document.getElementById('shoppingList').appendChild(newItem);
});

// Example 5
document.getElementById('removeLastTask').addEventListener('click', function () {
    let taskList = document.getElementById('taskList');

    taskList.lastElementChild.remove();
});

// Example 6
document.getElementById('clickMeButton').addEventListener("click", function () {
    alert("chaiCode");
});

// Example 7
document.getElementById("teaList").addEventListener("click", function (event) {

    if (event.target && event.target.matches('.teaItem')) {
        alert("You Selected: " + event.target.textContent);
    }
});

// Example 8
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;

    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;

    document.getElementById("feedbackInput").value = "";
});

// Example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10
let num = document.getElementById("toggleHighlight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");

    descriptionText.classList.toggle("highlight");
});