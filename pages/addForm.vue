<template>
  <div class="box-wrapper">
    <Form label="Book Name" v-model="formItems.bookName" />
    <Form label="Author Name" v-model="formItems.author" />
    <Form label="Published Year" v-model="formItems.publish" />
    <Form label="Buying Year" v-model="formItems.bought" />

    <Button
      class="mt-2"
      :label="selectedBook ? 'Update' : 'Save'"
      to="/books/bookLists"
      button-variant="link"
      @click="saveBook"
    />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useBooklistStore } from "@/stores/booklist";

  const booklistStore = useBooklistStore();

  const formItems = ref({
    id: "",
    bookName: "",
    author: "",
    publish: "",
    bought: "",
  });
  const selectedBook = ref(null);
  const saveBook = () => {
    // Validate before saving
    if (!formItems.value.bookName || !formItems.value.author) {
      alert("Please fill in required fields!");
      return;
    }
    if (selectedBook.value) {
      booklistStore.updateBooklist({
        id: selectedBook.value,
        bookName: formItems.value.bookName,
        authorName: formItems.value.author,
        publishedYear: Number(formItems.value.publish),
        buyingYear: Number(formItems.value.bought),
      });
    } else {
      booklistStore.addBook({
        id: Date.now(),
        bookName: formItems.value.bookName,
        authorName: formItems.value.author,
        publishedYear: Number(formItems.value.publish),
        buyingYear: Number(formItems.value.bought),
      });
    }

    // Reset form fields after saving
    formItems.value = { bookName: "", author: "", publish: "", bought: "" };
  };
</script>

<style lang="scss">
  .box-wrapper {
    @apply bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col gap-2 w-80 
         items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  }
</style>
