const bookList = document.getElementById('book-list');
const addingBook = document.getElementById('add-book');
const closingBook = document.getElementById('closing-book');
const form = document.querySelector('form');
const bookKeeper = document.getElementById('submit-btn');
form.style.display = 'none';

function addBookToLibrary() {
// Adding the div
  const divBook = document.createElement('div');
  divBook.classList.add('row');
  divBook.classList.add('card');
  divBook.classList.add('text-center');
  divBook.classList.add('card-width');

  // add book name
  const bookName = document.createElement('div');
  bookName.classList.add('card-header');
  bookName.textContent = localStorage.getItem('name');
  divBook.appendChild(bookName);

  // add description
  const description = document.createElement('div');
  description.classList.add('card-body');

  const hdescription = document.createElement('h5');
  hdescription.textContent = localStorage.getItem('description');
  description.appendChild(hdescription);

  const pdescription = document.createElement('p');
  pdescription.textContent = localStorage.getItem('pages');
  description.appendChild(pdescription);
  divBook.appendChild(description);

  // <button> to remove a book
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn');
  deleteButton.classList.add('btn-danger');
  deleteButton.classList.add('my-2');
  deleteButton.classList.add('mx-auto');
  divBook.appendChild(deleteButton);

  // <delete> event listener
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookList.removeChild(divBook);
  });

  bookList.appendChild(divBook);
}

function Book() {
  // the constructor...
  addingBook.addEventListener('click', () => {
    form.style.display = 'block';
  });

  closingBook.addEventListener('click', () => {
    form.style.display = 'none';
  });

  bookKeeper.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('description', document.getElementById('description').value);
    localStorage.setItem('pages', document.getElementById('pages').value);
    localStorage.setItem('status', 'false');

    addBookToLibrary();
    form.reset();
    form.style.display = 'none';
  });
}

Book();
