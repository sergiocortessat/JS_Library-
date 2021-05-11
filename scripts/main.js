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

  // create button
  const readButton = document.createElement('button');
  readButton.textContent = 'Not read';
  readButton.classList.add('btn');
  readButton.classList.add('btn-success');
  readButton.classList.add('w-auto');
  readButton.classList.add('mx-auto');
  readButton.setAttribute('id', 'read-button');
  description.appendChild(readButton);

  readButton.addEventListener('click', (e) => {
    if (localStorage.getItem('status') === 'false') {
      e.target.textContent = 'Read';
      localStorage.setItem('status', 'true');
    } else {
      e.target.textContent = 'Not read';
      localStorage.setItem('status', 'false');
    }
  });

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
