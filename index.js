import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const appSettings = {
    databaseURL: "https://realtime-database-61a93-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);
    clearInputField();
});

onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val());
    clearShoppingListEl();
    itemsArray.forEach(element => {
        appendItemToShoppingList(element);
    });
});

function clearShoppingListEl() {
    shoppingListEl.innerHTML = '';
}

function clearInputField() {
    inputFieldEl.value = '';
}

function appendItemToShoppingList(value) {
    shoppingListEl.innerHTML += `<li>${value}</li>`;
}
