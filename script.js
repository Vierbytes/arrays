window.addEventListener('load', () => {
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
        console.log(shoppingList)
    }

    removeLastItem()

    function displayList() {
        let listDisplay = document.getElementById('shoppingListDisplay')
        listDisplay.innerHTML = ``;
        for (let i =0; i < shoppingList.length; i++) {
            let listItem = document.createElement('li')
            listItem.textContent = shoppingList[i]
            listDisplay.appendChild(listItem)
        }
        shoppingList.forEach((items, ids)=> {
        console.log(ids + ') ' + items);
        })
    }

    displayList()

    document.getElementById('addItemButton').addEventListener('click', () => {
        let input = document.getElementById('itemInput')
        let itemText = input.value

        if (itemText !== '') {
            addItem(itemText)
            displayList()
            input.value = ''
        }
    })

    document.getElementById('removeButton').addEventListener('click', () => {
        removeLastItem()
        displayList()
    })
    function filterItems(searchTerm) {
        return shoppingList.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }

    filterItems(`Shoes`)
})
