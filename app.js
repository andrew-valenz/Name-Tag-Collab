const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Aaron';
nameDisplay.classList.add('Orange');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i clicked this button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});
