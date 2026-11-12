<script setup lang="ts">
import CardPadrao from '@/components/CardPadrao.vue';
import { ref, onMounted } from 'vue'; //imporatação
const personagens = ref([]); //variavel relativa - reage a medida que é alterada


// async - essa função faz uma conexão externa e o valor pode demorar
async function buscarPersonagens(){
  try{
    //await - porque a conexão demora, logo é necessário esperar
    const resposta = await fetch("https://rickandmortyapi.com/api/character");
    const dados = await resposta.json();
    personagens.value = dados.results;
  }catch(erro){
    console.error("Erro a conexão com a API")
  }

}
// onMounted - método que chama a função quando a aplicação for 'montada'
onMounted(buscarPersonagens);

</script>

<template>
  <h2>Rick and Morty</h2>
  
  <div>
    <CardPadrao v-for="item in personagens"
      :key="item.id"
      :titulo="item.name"
      :subtitulo="item.species"
      :imagem="item.image"
      />
  </div>

</template>
<style scoped>
  div{
    display:flex;
    flex-wrap: wrap;
    margin: 1rem;
    padding: 5px;
  }
</style>
