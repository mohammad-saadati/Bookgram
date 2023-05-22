<template>
  <div>
    <v-dialog v-model="store.openModal" max-width="320">
      <AuthorForm v-if="store.activeModalName === 'AuthorForm'" />
      <BookForm v-if="store.activeModalName === 'BookForm'" />
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "../../store/index.js";
import AuthorForm from "./AuthorForm.vue";
import BookForm from "./BookForm.vue";

const store = useModalStore();

const openDialog = () => {
  store.setModalName("AddBook");
};
</script>

<style></style>
