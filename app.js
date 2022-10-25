const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Aaron';
nameDisplay.classList.add('orange');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i clicked this button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});

const colorDropdown = document.getElementById('color-dropdown');
colorDropdown.addEventListener('change', () => {
    console.log('change is happening bro');
    console.log(colorDropdown.value);
    const nameTagSection = document.getElementById('name-tag-section');
    nameDisplay.classList.remove('orange');
    nameDisplay.classList.remove('purple');
    nameDisplay.classList.remove('brown');
    nameDisplay.classList.add(colorDropdown.value);
});
