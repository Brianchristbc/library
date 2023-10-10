// user inputs book information and submits using button
// event listener causes book to be created through constructor forming a variable
// variable pushed to myLibrary array
// dom for cards is cleared and new dom is created by looping through each element in the array

const addBookButton = document.querySelector(".add-book-button")
addBookButton.addEventListener("click", () => {
  addBook();
  console.log(myLibrary)
})

const myLibrary = [];

function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
}

// how to create new books with dynamic variable names
function addBook() {
  const titleInput = document.querySelector('.title-input');
  const authorInput = document.querySelector('.author-input');
  const statusInput = document.querySelector('.status-input');
  if (!titleInput.value || !authorInput.value || !statusInput.value) {
    console.log('please input your information!')
    return 
  } else {
  const book = new Book(titleInput.value, authorInput.value, statusInput.value);
  myLibrary.push(book);
  authorInput.value = "";
  titleInput.value = "";
  statusInput.value = "";

  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = "";

  myLibrary.forEach((book, index) => {
      const bookIndex = `book${index}`
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = bookIndex;
      const titleCard = document.createElement('div');
      titleCard.classList.add('title-card');
      const authorCard = document.createElement('div');
      authorCard.classList.add('author-card');
      const statusCard = document.createElement('div');
      statusCard.classList.add('status-card')

      card.appendChild(titleCard);
      card.appendChild(authorCard);
      card.appendChild(statusCard);
      

      wrapper.appendChild(card)

      titleCard.innerText = book.title;
      authorCard.innerText = book.author;
      statusCard.innerText = book.status;
    })}};
