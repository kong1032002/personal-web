
<template>
  <v-card class="bg-grey-darken-3 pa-10 rounded">
    <v-row dense no-gutters>
      <v-col align-self="center">
        <v-row justify="center">
          <h1>
            Nguyễn Thành Công
          </h1>
        </v-row>
        <v-row justify="center">
          <h2>
            UET-K65CB
          </h2>
        </v-row>
        <v-row justify="center">
          <h4>
            Back-end developer
          </h4>
        </v-row>
        <v-row justify="center" chip>
          <v-btn :elevation="10" v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-img :width="300" aspect-ratio="16/9" cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>


const fetchClient = useFetchClient()
// const dataGet = ref(await fetchClient.fetchClientFactory['POST']('/beer', { product_id: 1 }))
definePageMeta({
  layout: 'custom'
})

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
const data = ref(await fetchClient.fetchClientFactory['API']('nuxt_beers'))

</script>

<style scoped></style>
