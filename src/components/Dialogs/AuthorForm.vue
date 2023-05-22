<template>
  <v-card>
    <v-card-item>
      <form @submit.prevent="submit" class="p-3">
        <v-text-field
          v-model="formData.full_name"
          label="Full Name"
          :rules="requiredRule"
          class="mb-3"
        ></v-text-field>

        <v-file-input
          accept="image/*"
          label="profile picture"
          :rules="requiredRule"
          class="mb-3"
          @update:modelValue="handleUpload"
          v-model="formData.profile_picture"
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
    full_name: "",
    profile_picture: "",
  };
};
const formData = ref({
  full_name: "",
  profile_picture: "",
});

const requiredRule = [(v) => !!v || "This field is required"];

const submit = () => {
  store.saveAuthor(formData.value);
  store.closeModal();
};
const handleUpload = (newValue) => {};
</script>
