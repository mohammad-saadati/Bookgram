<template>
  <div>
    <v-container class="">
      <v-row justify="center">
        <v-col cols="12" lg="3" class="order-lg-2">
          <v-card v-if="author" :loading="loading" class="mx-auto">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img cover height="250" :src="author.profile_picture"></v-img>

            <v-card-item>
              <v-card-title
                ><router-link :to="`/author/${author.full_name}`">{{
                  author.full_name
                }}</router-link></v-card-title
              >
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="books">
        <v-col cols="12">
          <h1 class="text-center text-3xl py-10">Written Books</h1>
        </v-col>
        <v-col
          v-for="(item, index) in books"
          :key="index"
          cols="12"
          md="6"
          lg="3"
        >
          <v-card :loading="loading" class="mx-auto">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img cover height="250" :src="item.cover_image"></v-img>

            <v-card-item>
              <v-card-title
                ><router-link :to="`/book/${item.name}`">{{
                  item.name
                }}</router-link></v-card-title
              >

              <v-card-subtitle>
                <span class="me-1">author: {{ item.author }}</span>
              </v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else justify="center">
        <v-col cols="12">No Written book</v-col>
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
const author = ref(null);
const books = ref(null);

onMounted(() => {
  console.log("***********************", route.params.name);
  author.value = store.authors.find(
    (author) => (author.name = route.params.name)
  );
  books.value = store.books.filter((book) => book.author == route.params.name);
});
</script>

<style></style>
