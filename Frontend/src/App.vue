<script>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    HelloWorld
  },
  methods: {
    goToHomepage(e) {
      e.preventDefault()
      this.$router.push(`/`)
    }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Asaba</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Update Stock</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="router-container">
    <button @click="" type="button" class="btn btn-light" style="margin-right: 10%; important:  !important;">
      <i class="bi bi-plus-square" style="width: max-content;"></i>
    </button>
    <RouterView />
  </div>
</template>

<style>
.router-container {
  margin: 25px;
}
</style>
