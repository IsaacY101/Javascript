document.addEventListener('DOMContentLoaded', function() {
    let targetElement = document.getElementById('target');
    let names = ['John', 'Paul', 'Jones'];
    let listHTML = '';
    for (let i = 0; i < names.length; i++) {
        listHTML += '<li>' + names[i] + '</li>';
    }
    targetElement.innerHTML = listHTML;
});
