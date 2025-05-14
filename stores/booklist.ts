import { defineStore } from "pinia";

type Book = {
  id: number;
  bookName: string;
  authorName: string;
  publishedYear: number;
  buyingYear: number;
};

export const useBooklistStore = defineStore("booklist", {
  state: () => ({
    booklist: [] as Book[],
  }),
  actions: {
    addBook(book: Book) {
      this.booklist.push(book);
    },
    updateBooklist(updateBook: Book) {
      const index = this.booklist.findIndex(
        (book) => book.id === updateBook.id
      );
      if (index !== -1) {
        this.booklist[index] = updateBook;
      }
    },
    deleteBooks(id: number) {
      this.booklist = this.booklist.filter((book) => book.id !== id);
    },
  },
  persist: true, // Enable persistence
});
