<template>
  <div>
    <v-container class="">
      <v-row>
        <v-col cols="12" lg="3" class="order-lg-2">
          <div>
            <div>Filter</div>
            <v-text-field
              label="full name"
              hide-details="auto"
              v-model="filterInput"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" lg="9" class="order-lg-1">
          <AuthorCard :authors="fakeAuthors" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import AuthorCard from "../components/AuthorCard/index.vue";
import { useModalStore } from "../store/index.js";
import { ref, computed } from "vue";

const store = useModalStore();
const filterInput = ref("");

const fakeAuthors = computed(() => {
  if (!filterInput.value) return store.authors;

  const filteredData = store.authors.filter((item) =>
    item.full_name.includes(filterInput.value)
  );
  return filteredData;
});
</script>

<style></style>
