<template>
  <div class="bg-light">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" tag="a" to="/">
        SINPAGAPP
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/">
            <a href="#" class="nav-link">
              Home
            </a>
          </router-link>

          <router-link tag="li" class="nav-item" to="/users">
            <a href="#" class="nav-link">
              Users
            </a>
          </router-link>

          <router-link tag="li" class="nav-item" to="/phones">
            <a href="#" class="nav-link">
              Users Phones
            </a>
          </router-link>

          <router-link tag="li" class="nav-item" to="/create">
            <a href="#" class="nav-link">
              Create
            </a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main id="app" role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  padding: 80px 0;
}

body {
  background-color: #f8f9fa;
}
</style>
