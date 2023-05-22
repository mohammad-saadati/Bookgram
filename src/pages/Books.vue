<template>
  <div>
    <v-container class="">
      <v-row>
        <v-col cols="12" lg="3" class="order-lg-2">
          <div>
            <div>Filter</div>
            <v-text-field
              label="book name, author, ISBN"
              hide-details="auto"
              v-model="filterInput"
            ></v-text-field>
          </div>
          <div class="mt-5">
            <p class="font-bold">New Added Books</p>
            <div v-for="(item, index) in store.books.slice(0, 3)" :key="index">
              <router-link :to="`/book/${item.name}`">{{
                item.name
              }}</router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="9" class="order-lg-1">
          <BookCard :books="fakeBooks" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// import mockData from "../mock/books.json";
import BookCard from "../components/BookCard/index.vue";
import { useModalStore } from "../store/index.js";
import { ref, computed } from "vue";

const store = useModalStore();
const filterInput = ref("");

const fakeBooks = computed(() => {
  if (!filterInput.value) return store.books;

  const filteredData = store.books.filter((item) => {
    return (
      item.name.includes(filterInput.value) ||
      item.author.includes(filterInput.value) ||
      item.isbn.includes(filterInput.value)
    );
  });
  console.log(filteredData);
  return filteredData;
});
</script>

<style></style>
