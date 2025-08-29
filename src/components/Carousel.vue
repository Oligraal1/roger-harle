<script setup lang="ts">
import { ref } from 'vue'

// Liste des images dans public/images/gallery/
const allImages = [
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

// Mélanger et garder 5 aléatoires
const images = ref(allImages.sort(() => 0.5 - Math.random()).slice(0, 5))

const current = ref(0)

const prev = () => {
  current.value = (current.value - 1 + images.value.length) % images.value.length
}

const next = () => {
  current.value = (current.value + 1) % images.value.length
}
</script>

<template>
  <div class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
    <img
      :src="images[current].source"
      :alt="images[current].alt"
      class="w-full max-h-[350px] h-auto object-contain mx-auto transition-all duration-500"
    />
    <!-- Boutons précédent / suivant -->
    <button
      @click="prev"
      class="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 text-black text-2xl font-bold p-2 rounded-full shadow hover:bg-opacity-100"
    >
      <font-awesome-icon icon="chevron-circle-left" />
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 text-black text-2xl font-bold p-2 rounded-full shadow hover:bg-opacity-100"
    >
      <font-awesome-icon icon="chevron-circle-right" class=""/>
    </button>
    <!-- Indicateurs -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 gap-2">
      <span
        v-for="(img, index) in images"
        :key="img.id"
        :class="[
          'w-3 h-3 rounded-full cursor-pointer',
          current === index ? 'bg-white' : 'bg-gray-400'
        ]"
        @click="current = index"
      ></span>
    </div>
  </div>
  <h3 class="text-lg text-center py-6">{{images[current].alt}}</h3>
</template>
