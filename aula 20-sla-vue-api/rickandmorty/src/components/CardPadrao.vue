<script setup lang="ts">

defineProps({
  titulo: {
    type: String,
    required: true,

  },
  imagem: {
    type:String,

  },
  subtitulo: {
    type: String,
  }
})
</script>
<template>
  <div class="card">
    <img v-if="imagem" :src="imagem" alt="">
    <h3>{{ titulo }}</h3>
    <p v-if="subtitulo">{{ subtitulo }}</p>
  </div>


</template>
<style scoped>
div.card{
  border: 2px solid #6f7192;
  width: 300px;
  font-family:cursive ;
  background-color: rgb(184, 153, 206) ;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 1rem;
  color: #6f7192;

}
div img{
  width: 100%;
  height: 180px;
}
div.card div{
  padding: 12px 16px;
  color: #b12121;
}
div.card h3 {
  margin: 0 0 4px 0;
  font-size: 1.1rem;

}
div.card p {
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #32fdec;
  padding: 3px;
  margin-left: 10px;

}
</style>
