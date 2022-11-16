<template>
  <div>
    <h2>{{ id }}</h2>
    <h1>UTENTE: {{ utente.data.nome }} {{ utente.data.cognome }}</h1>
    <h3>EMAIL: {{ utente.data.email }}</h3>
    <p>ID: {{ utente.data.id }}</p>
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

</script>

