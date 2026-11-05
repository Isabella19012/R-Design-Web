import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      name:'home',
      component: () => import('../view/HomeView.vue')
    },
    {
      path:'/projetos',
      name:'projetos',
      component: () => import('../view/ProjetosView.vue')
    },
    {
      path:'/noticias',
      name:'noticias',
      component: () => import('../view/NoticiasView.vue')
    },
    {
      path:'/alunos',
      name:'alunos',
      component: () => import('../view/AlunosView.vue')
    },
    {
      path:'/contatos',
      name:'contatos',
      component: () => import('../view/ContatoView.vue')
    },

  ],
})

export default router
