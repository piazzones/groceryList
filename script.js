const form = document.getElementById("form");
const input = document.getElementById("input");
const groceriesUL = document.getElementById("groceries");

const groceries = JSON.parse(localStorage.getItem("groceries"));

if (groceries) {
    groceries.forEach((grocery) => {
        addGrocery(grocery);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addGrocery();
});

function addGrocery(grocery) {
    let groceryText = input.value;

    if (grocery) {
        groceryText = grocery.text;
    }

    if (groceryText) {
        const groceryEl = document.createElement("li");
        if (grocery && grocery.completed) {
            groceryEl.classList.add("completed");
        }

        groceryEl.innerText = groceryText;

        groceryEl.addEventListener("click", () => {
            groceryEl.classList.toggle("completed");

            updateLS();
        });

        groceryEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            groceryEl.remove();

            updateLS();
        });

        groceriesUL.appendChild(groceryEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const groceriesEl = document.querySelectorAll("li");

    const groceries = [];

    groceriesEl.forEach((groceryEl) => {
        groceries.push({
            text: groceryEl.innerText,
            completed: groceryEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("groceries", JSON.stringify(groceries));
}

function removeAll(){
    document.getElementById("groceries").innerHTML = "";
    var removeItens = document.getElementById(groceries);   
    
}