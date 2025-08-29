<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center">
    <!-- Contenu principal -->
    <div class="flex-grow flex flex-col items-center justify-center py-16 px-4 w-full max-w-4xl">
      <header class="text-center mb-16 w-full max-w-3xl">
        <h1 class="text-4xl mb-4">Roger Harle</h1>
        <h2 class="text-xl py-6">Photographe de rue</h2>
        <NavBar />
      </header>

      <main class="w-full flex flex-col items-center">
        <router-view />
      </main>
    </div>

    <!-- Footer collé en bas -->
    <footer class="w-full pt-6 pb-6">
      <div class="flex flex-row items-center justify-between px-4">
        <p>
          Made with <font-awesome-icon icon="heart" class="text-red-500"/>&nbsp;
          by <a href="https://www.coffineau.fr" target="_blank">Olivia <span class="font-bold">Coffineau</span></a> - {{ currentYear }}
        </p>
        <p>
          Crédits photos : <font-awesome-icon icon="copyright" class="text-xs "/> Roger Harle
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
h1 {
  font-size: 4rem;
  font-family: cursive;
}
footer i {
  vertical-align: middle;
}
</style>
