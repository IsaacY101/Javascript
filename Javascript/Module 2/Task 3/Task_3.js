function sortAndDisplayDogs() {
    const dogs = [];
    for (let i = 1; i <= 6; i++) {
        const dogName = document.getElementById(`dog${i}`).value;
        if (dogName) {
            dogs.push(dogName);
        }
    }
    dogs.sort();
    const reverseDogs = dogs.reverse();
    const ul = document.getElementById('dogList');
    ul.innerHTML = '';

    reverseDogs.forEach(dog => {
        const li = document.createElement('li');
        li.textContent = dog;
        ul.appendChild(li);
    });
}
