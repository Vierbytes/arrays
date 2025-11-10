# Array Manipulation - Reflection

## Reflection Questions:

### Question 1.
**How did array methods like `push()` and `filter()` help you manipulate data in this activity?**

The array methods simplified data manipulation significantly. **`push()`** made adding items straightforward, while **`filter()`** combined with **`includes()`** and **`toLowerCase()`** enabled powerful search functionality in just a few lines.

### Question 2.
**What challenges did you face when trying to filter and search for items in the array?**

The main challenge was implementing **case-insensitive search** using `toLowerCase()`. I also had to understand that `filter()` returns a new array rather than modifying the original, and remember to call `displayList()` after every array change to keep the screen synchronized with the data.

### Question 3.
**How would you modify this code to make it more efficient or user-friendly?**

<details><summary><strong>Potential changes or features to add</strong></summary>

- [] Individual delete buttons for each item
- [] Enter key support for quicker input
- [] Click to edit items

</details>

## Summary / Key Learnings:
| Challenge | Takeaway |
|-----------|----------|
| Case-insensitive search | Used `toLowerCase()` on both search term and items |
| UI synchronization | Called `updateDisplay()` after every data change |
| Array immutability | Understood `filter()` creates new arrays |

<p align="center">Made by Yeroc
<img src="jslogo.png" width="30" height="30" alt="Description" align="center"><p>