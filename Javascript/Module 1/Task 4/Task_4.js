function sortStudent() {
    let studentName;
    studentName = document.getElementById("nameInput").value;
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 4) + 1;
    let house;
    switch (randomNumber) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
        case 3:
            house = "Hufflepuff";
            break;
        case 4:
            house = "Ravenclaw";
            break;
    }

    document.getElementById("result").textContent = `${studentName}, you are ${house}.`;
}
