<script setup lang="ts">
import CardPadrao from '@/components/CardPadrao.vue';
import { ref, onMounted } from 'vue'; //imporatação
const estados = ref([]); //variavel relativa - reage a medida que é alterada


// async - essa função faz uma conexão externa e o valor pode demorar
async function buscarEstados(){
  try{
    //await - porque a conexão demora, logo é necessário esperar
    const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const dados = await resposta.json();
    estados.value = dados;
  }catch(erro){
    console.error("Erro a conexão com a API")
  }

}
onMounted(buscarEstados);

</script>

<template>
  <h2>Estados</h2>
  <div>
    <CardPadrao v-for="item in estados"
      :key="item.id"
      :titulo="item.sigla"
      :subtitulo="item.nome"
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
