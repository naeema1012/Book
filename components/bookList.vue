<template>
  <div>
    <ul>
      <div class="li">
        <li class="justify-between flex items-center">
          <Button
            to="/books/1"
            label="Title 1"
            variant="text"
            button-variant="link"
          />
          <span>{{ "completed" }}</span>
        </li>
        <li class="justify-between flex items-center">
          <Button
            to="/books/2"
            label="Title 2"
            variant="text"
            button-variant="link"
          />
          <span>{{ "completed" }}</span>
        </li>
        <li class="justify-between flex items-center">
          <Button
            :to="`/books/${1}`"
            label="Title 3"
            variant="text"
            button-variant="link"
          />
          <span>{{ "completed" }}</span>
        </li>
      </div>
    </ul>
  </div>
</template>
<script setup lnag="ts"></script>
<style lang="scss">
  .li {
    @apply p-2.5 bg-blue-300 items-center;
  }
</style>
