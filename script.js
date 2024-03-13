document.getElementById('createDivBtn').addEventListener('click', function () {
    var parent = document.querySelector('.container');
    var newDiv = document.createElement('div');
    newDiv.textContent = 'ALIYAN'
    newDiv.classList.add('newDiv');
    parent.appendChild(newDiv);

    var select = document.getElementById('styleSelect');
    var input = document.getElementById('styleRange');

    input.addEventListener('input', function () {
        var styleProperty = select.value;
        var styleValue = input.value;
        newDiv.style[styleProperty] = styleValue + '%';
    });
});