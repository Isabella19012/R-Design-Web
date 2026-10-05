<template>
  <HeaderSection/>
  <p>ESTE É O ARQUIVO App.vue.</p>
  <!--   <img alt="Vue logo" src="./assets/logo.png">
 -->
  <HelloWorld msg="Diretiva do componente HelloWord no arquivo App.vue."/>
  <FooterSection/> <!--marcação-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue' 

export default {
  name: 'App',
  components: {
    HelloWorld, HeaderSection, FooterSection //variavel
  } 
}
</script>

<style>
#app {
  background-color: #f2f2f2 ;

}
</style>
<!-- 
1.IMPORT
2.VARIAVEL
3.MARCAÇÃO
-->