const addEvent = document.querySelector('.addEvent');
const delAllEvent = document.querySelector('.del');
const addBox = document.querySelector('.addEventModal');
const cancelEntry = document.querySelector('.cancel');
const add = document.querySelector('.add');
const entry = document.querySelector('.entry');


addEvent.addEventListener('click', () => {
  addBox.style.display = addBox.style.display == 'flex' ? 'none' : 'flex';
})

cancelEntry.addEventListener('click', () => {
  addBox.style.display = addBox.style.display == 'flex' ? 'none' : 'flex';
})

add.addEventListener('click', () => {
  console.log(entry.value);
  
  entry.value = '';
  cancelEntry.click();
})

