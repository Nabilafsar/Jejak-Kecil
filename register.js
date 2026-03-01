function validasiEmail() {
    let inputEmail = document.getElementById("email");
    let pola = /^[^\s@]+@gmail\.com$/;

    if (!pola.test(inputEmail.value)) {
        alert("Email tidak valid.");
        return false;
    }

    alert("Email Valid!");
    return true;
}