// let svar = prompt("Skriv lösenord");

// while (svar !== "sigma") {
//     svar = prompt("Fel lösen. Försök igen.");
// }


const ul = document.getElementById("lista"); // Ensure this line is present

/* Add event listeners to the links */
document.querySelectorAll('.meny ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const li = document.createElement("li");
        li.textContent = event.target.textContent;
        ul.appendChild(li);
    });
});



for (let index = 0; index < 20; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}


/* Draggable grid items */
const gridContainer = document.querySelector('.grid-container');
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.draggable = true;

    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    });

    item.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(gridContainer, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            gridContainer.appendChild(draggable);
        } else {
            gridContainer.insertBefore(draggable, afterElement);
        }
    });
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.grid-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

const addItemButton = document.getElementById('addItemButton');
let itemCount = 4;

addItemButton.addEventListener('click', () => {
    itemCount++;
    const newItem = document.createElement('div');
    newItem.className = 'grid-item';
    newItem.id = `item${itemCount}`;
    newItem.textContent = `Item ${itemCount}`;
    newItem.draggable = true;

    newItem.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });

    newItem.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    newItem.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        const dropTarget = e.target;

        if (dropTarget.classList.contains('grid-item')) {
            gridContainer.insertBefore(draggedElement, dropTarget.nextSibling);
        }
    });

    gridContainer.appendChild(newItem);
});

