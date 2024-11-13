function createInputFields() {
    let numberOfParticipants = document.getElementById('numberOfParticipants').value;
    let nameFields = document.getElementById('nameFields');
    nameFields.innerHTML = '';

    for (let i = 0; i < numberOfParticipants; i++) {
        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Name of participant ${i + 1}`;
        input.id = `participant${i}`;
        input.required = true;
        nameFields.appendChild(input);
        nameFields.appendChild(document.createElement('br'));
    }
}

function sortAndDisplayNames() {
    let numberOfParticipants = document.getElementById('numberOfParticipants').value;
    let names = [];

    for (let i = 0; i < numberOfParticipants; i++) {
        const name = document.getElementById(`participant${i}`).value;
        if (name) {
            names.push(name);
        }
    }

    names.sort();

    const sortedParticipants = document.getElementById('sortedParticipants');
    sortedParticipants.innerHTML = '';

    names.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        sortedParticipants.appendChild(listItem);
    });
}
