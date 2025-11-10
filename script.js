let shoppingList = []

function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item)
        console.log(shoppingList);
        return;
    }
}

addItem('Apples')
addItem('Pears')
addItem('Shoes')
addItem('Steak')

function removeLastItem() {
    shoppingList.pop()
    console.log(shoppingList);
}

removeLastItem()

function displayList() {
    shoppingList.forEach((items, ids)=> {
    console.log(ids + ') ' + items);
    })
}

displayList()

function filterItems(searchTerm) {
    return shoppingList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    )
}

filterItems(`Shoes`)