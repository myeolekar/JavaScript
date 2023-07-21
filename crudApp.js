
let items = JSON.parse(localStorage.getItem('items')) || [];

//LIST
function renderItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
  ${item}
  <button onclick="editItem(${index})">Edit</button>
  <button onclick="deleteItem(${index})">Delete</button>
`;
        itemList.appendChild(li);
    });
}

//ADD
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();

    if (newItem !== '') {
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        itemInput.value = '';
        renderItems();
    }
}

//EDIT
function editItem(index) {
    const updatedItem = prompt('Edit item:', items[index]);

    if (updatedItem !== null) {
        items[index] = updatedItem;
        localStorage.setItem('items', JSON.stringify(items));
        renderItems();
    }
}

//DELETE
function deleteItem(index) {
    if (confirm('Are you sure you want to delete this item?')) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        renderItems();
    }
}

renderItems();
