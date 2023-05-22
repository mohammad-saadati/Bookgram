import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    const storedAuthors = JSON.parse(localStorage.getItem("authors"));
    let temp1 = [];
    if (storedAuthors) {
      temp1 = storedAuthors;
    }

    const storedBooks = JSON.parse(localStorage.getItem("books"));
    let temp2 = [];
    if (storedBooks) {
      temp2 = storedBooks;
    }

    return {
      authors: temp1,
      books: temp2,
      activeModalName: "",
      openModal: false,
    };
  },
  actions: {
    setModalName(type) {
      this.activeModalName = type;
      this.openModal = true;
    },
    closeModal() {
      this.activeModalName = "";
      this.openModal = false;
    },
    saveBook(book) {
      const reader = new FileReader();
      reader.readAsDataURL(book.cover_image[0]);
      reader.onload = () => {
        const base64String = reader.result;

        const temp = {
          name: book.name,
          author: book.author,
          isbn: book.isbn,
          cover_image: base64String,
          genre: book.author,
          page_number: book.author,
        };

        this.books.push(temp);

        localStorage.setItem("books", JSON.stringify(this.books));
      };
    },
    deleteBook(ind) {
      this.books.splice(ind, 1);
      localStorage.setItem("books", JSON.stringify(this.books));
    },
    editBook(book, index) {
      const reader = new FileReader();
      reader.readAsDataURL(book.cover_image[0]);
      reader.onload = () => {
        const base64String = reader.result;

        const temp = {
          name: book.name,
          author: book.author,
          isbn: book.isbn,
          cover_image: base64String,
          genre: book.author,
          page_number: book.author,
        };

        this.books.splice(index, 1, temp);

        localStorage.setItem("books", JSON.stringify(this.books));
      };
    },
    saveAuthor(author) {
      const reader = new FileReader();
      reader.readAsDataURL(author.profile_picture[0]);
      reader.onload = () => {
        const base64String = reader.result;

        const temp = {
          full_name: author.full_name,
          profile_picture: base64String,
        };

        this.authors.push(temp);

        localStorage.setItem("authors", JSON.stringify(this.authors));
      };
    },
    deleteAuthor(ind) {
      this.authors.splice(ind, 1);
      localStorage.setItem("authors", JSON.stringify(this.authors));
    },
    editAuthor(author, index) {
      const reader = new FileReader();
      reader.readAsDataURL(author.profile_picture[0]);
      reader.onload = () => {
        const base64String = reader.result;

        const temp = {
          full_name: author.full_name,
          profile_picture: base64String,
        };

        this.authors.splice(index, 1, temp);

        localStorage.setItem("authors", JSON.stringify(this.authors));
      };
    },
  },
});
