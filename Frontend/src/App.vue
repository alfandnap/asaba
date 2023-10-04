<script>
import HelloWorld from './components/HelloWorld.vue'
import { RouterView } from 'vue-router'

export default {
  data() {
    return {
      showButton: true
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    goToHomepage(e) {
      e.preventDefault()
      this.$router.push(`/`)
    }
  },
  watch: {
    '$route.fullPath': function (newPath, oldPath) {
      this.showButton = newPath === '/';
    }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a @click="goToHomepage" class="navbar-brand" href="#">Asaba</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a @click="goToHomepage" class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="router-container">
    <button v-if="showButton" @click="$router.push('/form')" type="button" class="btn btn-secondary ml-auto"
      style="margin-right: 10%; important:  !important;">
      <i class="bi bi-plus-square" style="width: max-content;"></i>
    </button>
    <RouterView />
  </div>
</template>

<style>
.router-container {
  margin: 2% 5% 1% 5%;
}
</style>
