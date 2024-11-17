document.addEventListener('DOMContentLoaded', function() {
    const triggerElement = document.getElementById('trigger');
    const targetImage = document.getElementById('target');
    function changeImageToB() {
        targetImage.src = 'img/picB.jpg';
    }
    function revertImageToA() {
        targetImage.src = 'img/picA.jpg';
    }
    triggerElement.addEventListener('mouseover', changeImageToB);
    triggerElement.addEventListener('mouseout', revertImageToA);
});
