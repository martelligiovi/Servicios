/// Lista ficticia de servicios
const serviceList = [
    "Heladeria",
    "Delivery de helado",
    "Pizzeria",
    "Cafeteria",
    "Restaurante",
    "Bar",
    "Panaderia",
    "Supermercado",
    "Carniceria",
    "Verduleria",
    "Farmacia",
    "Libreria",
];

function searchServices(event) {
    event.preventDefault();
    // Lógica para realizar la búsqueda del servicio seleccionado
    const inputValue = event.target.text.value;
    console.log("Search: " + inputValue);
}

function showSuggestions(event) {
    const input = event.target;
    const inputValue = input.value.toLowerCase();

    const suggestionsList = serviceList.filter((service) =>
        service.toLowerCase().includes(inputValue)
    );

    const suggestionsElement = document.getElementById("suggestions");
    suggestionsElement.innerHTML = "";

    const maxSuggestions = 3;
    for (let i = 0; i < maxSuggestions && i < suggestionsList.length; i++) {
        const suggestionItem = document.createElement("li");
        suggestionItem.textContent = suggestionsList[i];
        suggestionItem.classList.add("cursor-pointer", "hover:bg-gray-100", "px-2", "py-1");
        suggestionItem.onclick = function (event) {
            input.value = suggestionsList[i];
            suggestionsElement.innerHTML = "";
            event.stopPropagation(); // Evitar que el clic se propague al elemento padre (el input)
        };

        suggestionsElement.appendChild(suggestionItem);
    }
}

// Ocultar las recomendaciones cuando el buscador pierde el enfoque
const searchInput = document.querySelector("input[name='text']");
searchInput.addEventListener("blur", function () {
    // Usamos setTimeout para dar tiempo a que se dispare el evento click en la sugerencia
    setTimeout(() => {
        const suggestionsElement = document.getElementById("suggestions");
        suggestionsElement.innerHTML = "";
    }, 200);
});

// Autocompletar automáticamente al hacer clic en una sugerencia
searchInput.addEventListener("input", function (event) {
    showSuggestions(event);
});
