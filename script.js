document.addEventListener('DOMContentLoaded', function() {
    let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
    const container = document.getElementById('numbers');

    data.map(num => {
        const div = document.createElement('div');
        div.textContent = num;
        div.classList.add('number');
        if (num > 50) {
            div.classList.add('green');
        } else {
            div.classList.add('red');
        }
        container.appendChild(div);
    });
});