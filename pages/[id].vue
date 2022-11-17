<template>
  <div class="flex flex-column page">
    <div id="header">
      <h1>{{ utente.data.nome }}</h1>
      <h3>Livello {{ utente.data.livello }}</h3>
      <h3>Giorno: </h3>
    </div>
    <div id="content"></div>
    <div id="footer"></div>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const runtimeConfig = useRuntimeConfig()

const {
  data: utente,
  error,
  refresh,
  pending
} = await useFetch('/Utenti/' + id, {
  headers: {
    Authorization: 'Bearer ' + runtimeConfig.public.bearerDirectus
  },
  baseURL: runtimeConfig.public.apiBase
})

const {
  data: gruppo,
  error,
  refresh,
  pending
} = await useFetch('/Gru')

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

.flex {
  display: flex;
}

.flex-colum {
  flex-direction: column;
}

.justify-content-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.grid-center {
  display: grid;
  place-content: center;
}

.dev-border {
  border: 2px dashed maroon;
}

.page {
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(40, 40, 40, 1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(40, 40, 40, 1) 100%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(40, 40, 40, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#282828", GradientType=1);
}
</style>
