let shoppingList = []

function addItem(item) {
    shoppingList.push(item)
    console.log(shoppingList);
    return;
}

addItem('Apples')
addItem('Pears')
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


