<template>
  <div>
    <v-container class="">
      <v-row justify="center">
        <v-col cols="12" lg="3" class="order-lg-2">
          <v-card v-if="book" :loading="loading" class="mx-auto">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img cover height="250" :src="book.cover_image"></v-img>

            <v-card-item>
              <v-card-title
                ><router-link :to="`/book/${book.name}`">{{
                  book.name
                }}</router-link></v-card-title
              >

              <v-card-subtitle>
                <span class="me-1">author: {{ book.author }}</span>
              </v-card-subtitle>
              <v-card-subtitle>
                <span class="me-1">isbn: {{ book.isbn }}</span>
              </v-card-subtitle>
              <v-card-subtitle>
                <span class="me-1">genre: {{ book.genre }}</span>
              </v-card-subtitle>
              <v-card-subtitle>
                <span class="me-1">page_number: {{ book.page_number }}</span>
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "../store/index.js";
import { ref, onMounted } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const store = useModalStore();

const loading = ref();
const book = ref(null);

onMounted(() => {
  book.value = store.books.find((book) => (book.name = route.params.name));
});
</script>

<style></style>
