const input = document.getElementById('inputText');
const btn = document.getElementById('addBtn');
const list = document.getElementById('listItems');
const deleteBtn = document.getElementById('deleteBtn');

const shoppingList = [];

function addToList(item) {
    if(item !== ''){
        shoppingList.push(item);
    }
}

function showList() {
    list.innerHTML = '';
    shoppingList.map(item => {
        list.innerHTML += `<li><input onchange="handleCheck(this.parentNode)" type='checkbox'>${item}</li>`;
    })
}

function getInput() {
    let newItem = input.value;
    input.value = '';
    return newItem;
}

function addNewItem() {
    let newInput = getInput();
    addToList(newInput);
    showList();
}

function handleDelete() {
    if(shoppingList[0] !== undefined) {
        shoppingList.pop();
        showList();
    }
}

function handleCheck(arg) {
    let status = arg.style;
    if(status.textDecoration == 'none' || status.textDecoration == ''){
        status.textDecoration = 'line-through';
    }else {
        status.textDecoration = 'none';
    }
}

// Listen for button clicks
btn.addEventListener('click', addNewItem);
deleteBtn.addEventListener('click', handleDelete)