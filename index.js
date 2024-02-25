import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const appSettings = {
    databaseURL: "YOUR_REALTIME_DATABASE_URL"
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
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val());
        
        clearShoppingListEl();

        itemsArray.forEach(item => {
            appendItemToShoppingList(item);
    });
    } else {
        shoppingListEl.innerHTML = "No items in shopping list yet...";
    }
});

function clearShoppingListEl() {
    shoppingListEl.innerHTML = '';
}

function clearInputField() {
    inputFieldEl.value = '';
}

function appendItemToShoppingList(item) {
    let itemID = item[0];
    let itemValue = item[1];
    let newElement = document.createElement("li");

    newElement.textContent = itemValue;

    newElement.addEventListener("click", function() {
        let exactLocationOfIteminDB = ref(database, `shoppingList/${itemID}`);
        remove(exactLocationOfIteminDB);
    });

    shoppingListEl.append(newElement);
}

function getCurrentYear() {
    const date = new Date();
    const year = date.getFullYear();
    const yearElement = document.getElementById("info");
    yearElement.append(" " + year);
}

getCurrentYear();
