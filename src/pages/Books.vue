<template>
  <div>
    <v-container class="">
      <v-row>
        <v-col cols="12" lg="3" class="order-lg-2">
          <BookFilters />
        </v-col>
        <v-col cols="12" lg="9" class="order-lg-1">
          <BookCard :books="fakeBooks" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import mockData from "../mock/books.json";
import BookCard from "../components/BookCard/index.vue";
import BookFilters from "../components/BookFilters/index.vue";
import { ref } from "vue";

const fakeBooks = ref(mockData);
</script>

<style></style>
