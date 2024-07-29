let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
    let myRegex = /^[a-zA-Z-\s]+$/;
    let myInput = document.getElementById('first-name');
    let myInput2 = document.getElementById('last-name');
    let myError = document.getElementById('errorName');

    if ((myInput.value.trim() == "" || myInput2.value.trim() == "") && (!myRegex.test(myInput.value) || !myRegex.test(myInput2.value))) {
        myError.innerHTML = "Le prénom et le nom sont obligatoire et doivent comporter des lettres et des tirets uniquement.";
        myError.style.color = 'red';
        e.preventDefault();
    }
    else {
        myError.innerHTML = ""; // Clear any previous error message
    }
});
