<template>
  <nav class="bg-[#222222] text-white fixed top-0 left-0 w-full shadow-md z-50">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center h-16">

        <!-- Menu desktop -->
        <div class="hidden md:flex space-x-8 text-lg gap-12 items-center">
          <RouterLink to="/" class="hover:text-gray-400 transition">Accueil</RouterLink>
          <RouterLink to="/noir_blanc" class="hover:text-gray-400 transition">Noir et Blanc</RouterLink>
          <RouterLink to="/color" class="hover:text-gray-400 transition">Couleur</RouterLink>
          <RouterLink to="/contact" class="hover:text-gray-400 transition">Contact</RouterLink>
        </div>

        <!-- Bouton burger mobile -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="isOpen" class="md:hidden bg-gray-900">
      <div class="px-2 pt-2 pb-3 space-y-2">
        <RouterLink to="/" class="block px-3 py-2 rounded hover:bg-gray-700">Accueil</RouterLink>
        <RouterLink to="/noir_blanc" class="block px-3 py-2 rounded hover:bg-gray-700">Noir et blanc</RouterLink>
        <RouterLink to="/color" class="block px-3 py-2 rounded hover:bg-gray-700">Couleur</RouterLink>
        <RouterLink to="/contact" class="block px-3 py-2 rounded hover:bg-gray-700">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
