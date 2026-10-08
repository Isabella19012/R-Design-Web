<template>

  <h1>CORRIDA IFRN 117 anos</h1>
  <nav>
    <router-link to="/organizacao">Organização</router-link>
    <router-link to="/contato">Contato</router-link>
  </nav>

    <router-view/>
    <!--router-link será substituido pelo conteúdo da página-->
    <section class="dicas">
    <CartaoDica dica="Use tênis específico para corrida"/>
    <CartaoDica dica="Não teste roupas novas no dia da prova"/>
    <CartaoDica dica="Use géis de carboidatro que seu corpo já conhece"/>
    <CartaoDica dica="Faça ativações antes da prova"/>
    <CartaoDica dica="Aumente a insgestão de carboidratos no dia anterior"/>
    <CartaoDica dica="Treine por o mínimo 1 mês"/>
    <CartaoDica dica="Fique atento aos batimentos cardíacos"/>      
    </section>


</template>

<script>
import CartaoDica from './components/CartaoDica.vue';

export default {
  name: 'App',
  components: {
    CartaoDica
  }
}
</script>

<style>
.dicas {
  display: flex;
  flex-wrap: wrap ;
}
</style>
