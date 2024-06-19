<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cabe from './components/Cabecalho.vue'
import Corpo from './components/corpo.vue'
import conteudo from './components/conteudo.vue'
import img from './assets/favicon.png'
import login from './components/login.vue'

</script>

<template>
  
  <Cabe :logo="img"/>
  <RouterView />
  <!-- 
 <Cabe :logo="img"/>
  <conteudo />
  <RouterView />
  -->
  
   
</template>

<style scoped>

.teste{
  width: 100vh;
  
}
span{
  color: rgb(255, 255, 255);
 
}



</style>
