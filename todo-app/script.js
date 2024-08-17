const addEvent = document.querySelector('.addEvent');
const delAllEvent = document.querySelector('.del');
const addBox = document.querySelector('.addEventModal');
const cancelEntry = document.querySelector('.cancel');
const add = document.querySelector('.add');
const entry = document.querySelector('.entry');
const table = document.querySelector('table');

addEvent.addEventListener('click', () => {
    addBox.style.display = addBox.style.display == 'flex' ? 'none' : 'flex';
});

cancelEntry.addEventListener('click', () => {
    addBox.style.display = addBox.style.display == 'flex' ? 'none' : 'flex';
});

add.addEventListener('click', () => {
    const entryValue = entry.value.trim();
    if (entryValue !== '') {
        storeEntry(entryValue);
        entry.value = '';
        cancelEntry.click();
        renderEntries();
    }
});

delAllEvent.addEventListener('click', () => {
    localStorage.removeItem('todos');
    renderEntries();
});

function storeEntry(entry) {
    let entries = JSON.parse(localStorage.getItem('todos')) || [];
    entries.push({ name: entry });
    localStorage.setItem('todos', JSON.stringify(entries));
}

function createEntryElement(entry) {
    const enteredEntry = document.createElement('tr');
    enteredEntry.innerHTML = `
        <td>${entry.name}</td>
        <td>
            <button class="complete">✔️ Done</button>
        </td>
    `;
    enteredEntry.querySelector('.complete').addEventListener('click', () => {
        removeEntry(entry.name);
        triggerConfetti();
    });
    return enteredEntry;
}

function triggerConfetti() {
    const duration = 2 * 1000; // 2 seconds
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function removeEntry(entryName) {
    let entries = JSON.parse(localStorage.getItem('todos')) || [];
    entries = entries.filter(entry => entry.name !== entryName);
    localStorage.setItem('todos', JSON.stringify(entries));
    renderEntries();
}

function renderEntries() {
    const entries = JSON.parse(localStorage.getItem('todos')) || [];
    const tbody = table.querySelector('tbody') || document.createElement('tbody');
    tbody.innerHTML = ''; // Clear existing rows

    entries.forEach(entry => {
        tbody.appendChild(createEntryElement(entry));
    });

    if (!table.querySelector('tbody')) {
        table.appendChild(tbody);
    }
}

// Initial render on pg
document.addEventListener('DOMContentLoaded', renderEntries);