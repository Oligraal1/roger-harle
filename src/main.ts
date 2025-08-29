import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icônes que tu veux utiliser
import {
  faQuoteLeft,
  faQuoteRight,
  faMinus,
  faChevronCircleLeft,
  faChevronCircleRight,
  faCopyright,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// Ajouter les icônes à la librairie
library.add(
  faQuoteLeft,
  faQuoteRight,
  faMinus,
  faChevronCircleLeft,
  faChevronCircleRight,
  faCopyright,
  faHeart
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
// Déclarer le composant globalement
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
