const cardsContainerElement = document.querySelector(".cards-container"),
  addBookElement = document.querySelector(".add-button"),
  closeFormElement = document.querySelector(".close-form"),
  addBookSubmitElement = document.querySelector(".add-submit"),
  templateElement = document.querySelector("template").content,
  fragmentElement = document.createDocumentFragment();

const addNewBook = () => {
  let name = document.getElementById("name-input").value;
  let author = document.getElementById("author-input").value;
  let pages = document.getElementById("pages-input").value;

  if (!name || !author || !pages) return;

  templateElement.querySelector(".book-name").textContent = name;
  templateElement.querySelector(".author-name").textContent = author;
  templateElement.querySelector(".book-pages").textContent = `${pages} pages`;

  let templateClone = document.importNode(templateElement, true);

  fragmentElement.appendChild(templateClone);

  document.querySelector(".cards-container").appendChild(fragmentElement);

  document.getElementById("name-input").value = "";
  document.getElementById("author-input").value = "";
  document.getElementById("pages-input").value = "";
};

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target === addBookElement) {
    document.querySelector(".form-container").classList.add("is-active");
    document.querySelector(".main-container").classList.add("is-active");
  }

  if (e.target === closeFormElement) {
    document.querySelector(".form-container").classList.remove("is-active");
    document.querySelector(".main-container").classList.remove("is-active");
  }

  if (e.target === addBookSubmitElement) {
    addNewBook();
    document.querySelector(".form-container").classList.remove("is-active");
    document.querySelector(".main-container").classList.remove("is-active");
  }
});

cardsContainerElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) e.target.parentElement.remove();
});
