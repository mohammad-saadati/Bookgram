<template>
  <div class="relative pb-10 h-screen">
    <Header>
      <!-- Header content -->
    </Header>

    <main class="py-10">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header/index.vue"
import Footer from "../components/Footer/index.vue"
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  flex-shrink: 0;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
