import RickandMortyView from '@/views/RickAndMortyView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rickandmorty',
      component: RickandMortyView
    }
  ],
})

export default router
