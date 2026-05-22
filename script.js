// === 03-portfolio ===

let formular = document.querySelector("#kontakt-form");

formular.addEventListener("submit", function(event) {
    event.preventDefault();

    let name      = document.querySelector("#name").value;
    let email     = document.querySelector("#email").value;
    let nachricht = document.querySelector("#nachricht").value;

    let meldung = document.querySelector("#formular-meldung");

 if (name === "" || email === "" || nachricht === "") {
        meldung.textContent = "Bitte alle Felder ausfüllen.";
        return;
    }

    meldung.textContent = "Danke " + name + "! Ich melde mich innerhalb von 24 Stunden.";
    formular.reset();
});