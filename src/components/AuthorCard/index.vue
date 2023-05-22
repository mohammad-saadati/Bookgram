<template>
  <v-row align="stratch">
    <v-col cols="12" md="6" lg="3" class="h-auto">
      <v-card class="d-flex flex-column justify-center align-center h-full">
        <v-card-item>
          <v-card-title class="text-uppercase">add author</v-card-title>
        </v-card-item>
        <v-card-actions class="text-center">
          <v-btn color="primary" variant="elevated" @click="openDialog">
            <v-icon icon="mdi-plus" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col v-for="(item, index) in authors" :key="index" cols="12" md="6" lg="3">
      <v-card :loading="loading" class="mx-auto">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img cover height="250" :src="item.profile_picture"></v-img>

        <v-card-item>
          <v-card-title><router-link :to="`/author/${item.full_name}`">{{ item.full_name }}</router-link></v-card-title>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn
            density="compact"
            icon="mdi-pen"
            color="secondary"
            @click="handleOpenEditModal(item)"
          ></v-btn>
          <v-btn
            density="compact"
            icon="mdi-delete"
            color="red"
            @click="handleOpenModal(index)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-dialog v-model="showDeleteDialog" width="auto">
      <v-card>
        <v-card-text> are you sure want to delete? </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="handleDelete"
            >Yes</v-btn
          >
          <v-btn color="primary" @click="showDeleteDialog = false"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showEditDialog" width="auto">
      <v-card>
        <v-card-item>
          <form @submit.prevent="submitEdit" class="p-3">
            <v-text-field
              v-model="targetForEdit.full_name"
              label="Name"
              :rules="requiredRule"
              class="mb-3"
            ></v-text-field>

            <v-file-input
              accept="image/*"
              label="cover image"
              :rules="requiredRule"
              class="mb-3"
              v-model="targetForEdit.profile_picture"
            ></v-file-input>

            <v-card-actions>
              <v-btn
                class="me-4"
                type="submit"
                variant="flat"
                color="indigo-darken-3"
              >
                save
              </v-btn>

              <v-btn
                @click="showEditDialog = false"
                variant="flat"
                color="grey-darken-1
              "
              >
                cancel
              </v-btn>
            </v-card-actions>
          </form>
        </v-card-item>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useModalStore } from "../../store/index.js";

const requiredRule = [(v) => !!v || "This field is required"];

const store = useModalStore();

const props = defineProps({
  authors: {
    type: Array,
    default: () => [],
  },
});

const showEditDialog = ref(false);
const targetForEdit = ref({});
const showDeleteDialog = ref(false);
const targetForDelete = ref(null);
const loading = ref();
const editingIndex = ref();

const openDialog = () => {
  store.setModalName("AuthorForm");
};
const handleDelete = () => {
  store.deleteAuthor(targetForDelete.value);
  showDeleteDialog.value = false;
};
const handleOpenModal = (ind) => {
  targetForDelete.value = ind;
  showDeleteDialog.value = true;
};
const handleOpenEditModal = (item, index) => {
  targetForEdit.value = {
    full_name: item.full_name,
    profile_picture: null,
  };
  showEditDialog.value = true;
  editingIndex.value = index
};
const submitEdit = () => {
  store.editAuthor(targetForEdit.value, editingIndex.value)
  showEditDialog.value = false;
};
</script>

<style></style>
