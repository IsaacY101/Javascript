document.addEventListener('DOMContentLoaded', function() {
    let students = [
        { id: "2345768", name: "John" },
        { id: "2134657", name: "Paul" },
        { id: "5423679", name: "Jones" }
    ];
    let targetElement = document.getElementById('target');
    students.forEach(function(student) {
        let option = document.createElement('option');
        option.value = student.id;
        option.textContent = student.name;

        targetElement.appendChild(option);
    });
});
