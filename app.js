addEventListeners();

function addEventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord1);
    document.getElementById("save").addEventListener("click", saveWord);
    document.addEventListener("DOMContentLoaded", getAllSearched);

}
const translate = new Translate(document.getElementById("wordtext").value, document.getElementById("language1").value + "-" + document.getElementById("language2").value);
const ui = new UI();

function translateWord1(e) {
    getAllSearched();
    let words = document.getElementById("wordtext").value.trim();
    let twords = document.getElementById("outputWord").textContent;

    translate.changeWord(words, document.getElementById("language1").value + "-" + document.getElementById("language2").value);
    translate.translateWord(function (response, err) {
        if (err) {
            ui.showHistory(words);
            ui.translateWord(err);
        } else {
            ui.translateWord(response)
            console.log(response);
        }
    });
    e.preventDefault();
}
const lastUsers = document.getElementById("last-users");

console.log(lastUsers);

function getAllSearched() {
    let words = Storage.getAllSearchedUserFromStorage();

    let result = "";
    let sayac;

    words.forEach((words, i) => {
        result += `<li class="list-group">${i+1}) ${words.word}- ${words.tword}</li>`;
    });

    lastUsers.innerHTML = result;
}

function saveWord() {
    let words = document.getElementById("wordtext").value.trim();
    let twords = document.getElementById("outputWord").textContent;

    if (twords === "") {
        alert("Kelime giriniz...");
    } else {
        Storage.addSearchedUserToStorage(words, twords);
    }


}
