<template>
  <v-card>
    <v-card-item>
      <form @submit.prevent="submit" class="p-3">
        <v-text-field
          v-model="formData.name"
          label="Name"
          :rules="requiredRule"
          class="mb-3"
        ></v-text-field>

        <v-text-field
          v-model="formData.author"
          label="Author"
          :rules="requiredRule"
          class="mb-3"
        ></v-text-field>

        <v-text-field
          v-model="formData.isbn"
          :rules="requiredRule"
          label="isbn"
          class="mb-3"
        ></v-text-field>
        <v-text-field
          v-model="formData.genre"
          :rules="requiredRule"
          label="genre"
          class="mb-3"
        ></v-text-field>
        <v-text-field
          v-model="formData.page_number"
          label="page number"
          :rules="requiredRule"
          class="mb-3"
        ></v-text-field>

        <v-file-input
          accept="image/*"
          label="cover image"
          :rules="requiredRule"
          class="mb-3"
          @update:modelValue="handleUpload"
          v-model="formData.cover_image"
        ></v-file-input>

        <v-card-actions>
          <v-btn
            class="me-4"
            type="submit"
            variant="flat"
            color="indigo-darken-3"
          >
            submit
          </v-btn>

          <v-btn
            @click="handleReset"
            variant="flat"
            color="grey-darken-1
          "
          >
            clear
          </v-btn>
        </v-card-actions>
      </form>
    </v-card-item>
  </v-card>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useModalStore } from "../../store/index.js";

const store = useModalStore();

const handleReset = () => {
  formData.value = {
    name: "",
    author: "",
    isbn: "",
    cover_image: "",
    genre: "",
    page_number: "",
  };
};
const formData = ref({
  name: "",
  author: "",
  isbn: "",
  cover_image: "",
  genre: "",
  page_number: "",
});

const requiredRule = [(v) => !!v || "This field is required"];

const submit = () => {
  store.saveBook(formData.value);
  store.closeModal();
};
const handleUpload = (newValue) => {};
</script>
