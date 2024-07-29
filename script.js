const myLibrary = [];


const fieldValue = document.querySelectorAll('field');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPage = document.getElementById('pages');
const bookRead = document.getElementById('readStatus');
const bookSubmit = document.getElementById('submit');
const bookList = document.getElementById('bookList');

        

function Book(title, author, pagesCount, read) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.read = read; 

  // the constructor...
}
function addBookToLibrary() {
    bookSubmit.addEventListener('click', (event) => {
      event.preventDefault();

          const titleB =  bookTitle.value;
          const authorB = bookAuthor.value;
          const pagesB = bookPage.value;
          const readB = bookRead.value;
          const newBook = new Book(titleB, authorB, pagesB, readB);

          const titleField = document.createElement('p');
          const authorField = document.createElement('p');
          const pagesField = document.createElement('p');
          const readField = document.createElement('button');
          const deleteButton = document.createElement('button');

      
      titleField.textContent = `${newBook.title}`;
      authorField.textContent = `${newBook.author}`;
      pagesField.textContent = `${newBook.pagesCount}`;
      
      bookList.appendChild(titleField);
      bookList.appendChild(authorField);
      bookList.appendChild(pagesField);


      if (newBook.read === 'Yes') {
      readField.textContent = `${newBook.read}`;
      bookList.appendChild(readField);

      } else {
        readField.textContent = "Mark as read"
        bookList.appendChild(readField);

        readField.addEventListener('click', () => 
          readField.textContent = "Yes")

      }
      
      deleteButton.textContent = "Delete position"
      bookList.appendChild(deleteButton)
      

      
    });
  };


window.addEventListener('load', addBookToLibrary);
