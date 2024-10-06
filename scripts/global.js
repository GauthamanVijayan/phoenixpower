function loadComponent(componentId, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
            console.log(data)
        })
        .catch(error => console.log(`Error loading ${fileName}:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent('navbar', 'components/navbar.html');
    loadComponent('footer', 'components/footer.html');
});