<template>
  <v-row align="stratch">
    <v-col cols="12" md="6" lg="3" class="h-auto">
      <v-card class="d-flex flex-column justify-center align-center h-full">
        <v-card-item>
          <v-card-title class="text-uppercase" @click="openDialog"
            >add book</v-card-title
          >
        </v-card-item>
        <v-card-actions class="text-center">
          <v-btn color="primary" variant="elevated">
            <v-icon icon="mdi-plus" />
          </v-btn>
        </v-card-actions>
        {{ store.activeModalName }}
      </v-card>
    </v-col>
    <v-col v-for="(item, index) in books" :key="index" cols="12" md="6" lg="3">
      <v-card :loading="loading" class="mx-auto">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img cover height="250" :src="item.coverImage"></v-img>

        <v-card-item>
          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-subtitle>
            <span class="me-1">author: {{ item.author }}</span>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text"> Reserve </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useModalStore } from "../../store/index.js";

const store = useModalStore();

const props = defineProps({
  books: {
    type: Array,
    default: () => [],
  },
});

const loading = ref();

const openDialog = () => {};
</script>

<style></style>
