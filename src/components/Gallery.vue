<script setup lang="ts">
import { ref, onMounted, computed, defineProps } from 'vue'
// Liste dynamique des images
interface ImageItem {
  id: string
  name: string
  type: string
  size: string
  source: string
  alt: string
}

// Props pour filtrer le type d'image : 'c' ou 'nb'
const props = defineProps<{
  filterType: 'c' | 'nb'
}>()

const images = ref<ImageItem[]>([])

onMounted(() => {
  // Nom des images présentes dans public/images/gallery
  images.value = [
    {
      id: '1',
      name: '1c',
      size: '1532',
      source: 'images/gallery/1c.jpg',
      alt: 'Jeune fille en bleu écrivant sur un mur',
      type: 'c',
    },
    {
      id: '2',
      name: '2c',
      size: '1944',
      source: 'images/gallery/2c.jpg',
      alt: 'Vieil homme en Chine',
      type: 'c',
    },
    {
      id: '3',
      name: '3c',
      size: '2995',
      source: 'images/gallery/3c.jpg',
      alt: 'Vieil homme au Maroc',
      type: 'c',
    },
    {
      id: '4',
      name: '4c',
      size: '1806',
      source: 'images/gallery/4c.jpg',
      alt: 'Femme voilée marchant dans une ruelle',
      type: 'c',
    },
    {
      id: '5',
      name: '7c',
      size: '1043',
      source: 'images/gallery/7c.jpg',
      alt: "Enfants courant dans l'eau au Sénégal",
      type: 'c',
    },
    {
      id: '6',
      name: '6c',
      size: '2368',
      source: 'images/gallery/6c.jpg',
      alt: 'Petite fille en Roumanie',
      type: 'c',
    },
    {
      id: '7',
      name: '5c',
      size: '2356',
      source: 'images/gallery/5c.jpg',
      alt: 'Petite fille en Turquie',
      type: 'c',
    },
    {
      id: '8',
      name: '1nb',
      size: '1949',
      source: 'images/gallery/1nb.jpg',
      alt: 'Vieil homme',
      type: 'nb',
    },
    {
      id: '9',
      name: '2nb',
      size: '2628',
      source: 'images/gallery/2nb.jpg',
      alt: 'Troupeau de vaches',
      type: 'nb',
    },
    {
      id: '10',
      name: '3nb',
      size: '2448',
      source: 'images/gallery/3nb.jpg',
      alt: "Ronde d'enfants",
      type: 'nb',
    },
    {
      id: '11',
      name: '4nb',
      size: '1959',
      source: 'images/gallery/4nb.jpg',
      alt: 'Maison en ruine',
      type: 'nb',
    },
    {
      id: '12',
      name: '5nb',
      size: '2619',
      source: 'images/gallery/5nb.jpg',
      alt: "Rassemblement d'hommes armés",
      type: 'nb',
    },
    {
      id: '13',
      name: '6nb',
      size: '1835',
      source: 'images/gallery/6nb.jpg',
      alt: 'Homme assis et armé',
      type: 'nb',
    },
    {
      id: '14',
      name: '7nb',
      size: '2666',
      source: 'images/gallery/7nb.jpg',
      alt: 'Enfants assis sur une jeep',
      type: 'nb',
    },
    {
      id: '15',
      name: '8nb',
      size: '2846',
      source: 'images/gallery/8nb.jpg',
      alt: 'Enfants jouant avec un pneu',
      type: 'nb',
    },
    {
      id: '16',
      name: '9nb',
      size: '2526',
      source: 'images/gallery/9nb.jpg',
      alt: 'Enfants dans une ruelle',
      type: 'nb',
    },
    {
      id: '17',
      name: '10nb',
      size: '2567',
      source: 'images/gallery/10nb.jpg',
      alt: 'Hommes regardant un enfant avec un fusil',
      type: 'nb',
    },
  ]
})

// Filtrage selon la prop
const filteredImages = computed(() => {
  if (!props.filterType) return images.value
  return images.value.filter((img) => img.type === props.filterType)
})

// Ouvrir pop-up
const selectedImage = ref(null)

function openLightbox(img) {
  selectedImage.value = img
}
// Fermer la pop-up
function closeLightbox() {
  selectedImage.value = null
}

</script>

<template>
  <div class="max-w-6xl mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(img, index) in filteredImages"
        :key="index"
        class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        @click="openLightbox(img)"
      >
        <img :src="img.source" :alt="img.alt" class="w-full h-full object-cover" />
      </div>
    </div>
    <!-- Pop-up lightbox -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
      @click.self="closeLightbox"
    >
      <img
        :src="selectedImage.source"
        :alt="selectedImage.alt"
        class="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
      />

      <!-- Texte de description -->
      <h3 class="text-white text-lg mt-4 text-center">
        {{ selectedImage.alt }}
      </h3>

      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        &times;
      </button>
    </div>

  </div>
</template>

<style scoped>
/* Si tu veux un style supplémentaire */
</style>
