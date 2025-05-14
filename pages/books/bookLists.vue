<template>
  <div class="booklist-wrapper">
    <h2 class="text-xl font-semibold mb-4 text-center">Book List</h2>

    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Published</th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in booklist" :key="book.id">
          <td>{{ book?.bookName }}</td>
          <td>{{ book?.authorName }}</td>
          <td>{{ book?.publishedYear }}</td>
          <td>{{ book?.buyingYear }}</td>
          <td>
            <Button label="Delete" color="red" @click="deleteBook(book.id)" />
          </td>
          <td>
            <Button label="Update" color="red" @click="updateBook" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { storeToRefs } from "pinia";
  import { useBooklistStore } from "@/stores/booklist";

  const booklistStore = useBooklistStore();
  const { booklist } = storeToRefs(booklistStore);
  const deleteBook = (id) => {
    booklistStore.deleteBooks(id);
  };
  const updateBook = () => {
    booklistStore.updateBooklist({
      bookName: booklist.value.bookName,
      authorName: formItems.value.author,
      publishedYear: Number(formItems.value.publish),
      buyingYear: Number(formItems.value.bought),
    });
  };
</script>

<style lang="scss">
  .booklist-wrapper {
    @apply bg-white border border-gray-300 rounded-lg p-4 shadow-md w-auto mx-auto mt-10;
  }

  .book-item {
    @apply p-2 border-b last:border-0;
  }
  table {
    @apply w-full border-collapse border border-gray-300;
  }

  th,
  td {
    @apply border border-gray-300 px-4 py-2 text-center;
  }
</style>
