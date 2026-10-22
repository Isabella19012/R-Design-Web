<script setup>
import { useNoticiasStore } from '@/stores/useNoticiasStore';
const noticiasStore = useNoticiasStore()
</script>

<template>
    <article>
        <h2>Notícias</h2>

        <div v-for="noticia in noticiasStore.noticias" :key="noticia.id">
            <p>{{ noticia.titulo }}</p>
        </div>

    </article>
</template>
