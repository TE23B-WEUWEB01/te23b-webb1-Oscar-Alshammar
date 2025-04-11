function kalkylator(op) {
    let tal1 = document.querySelector("#tal1");
    let tal2 = document.querySelector("#tal2");

    let svar = document.querySelector("#svar");

    if (op === '+') {
        svar.value = Number(tal1.value) + Number(tal2.value);
    } else if (op === '-') {
        svar.value = Number(tal1.value) - Number(tal2.value);
    } else if (op === '*') {
        svar.value = Number(tal1.value) * Number(tal2.value);
    } else if (op === '/') {
        svar.value = Number(tal1.value) / Number(tal2.value);
    } else {
        svar.value = "Invalid operator";
    }

    if(svar.value == "666"){
        document.body.style.visibility = "hidden";
    }
}