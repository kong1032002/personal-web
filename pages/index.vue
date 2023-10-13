
<template>
  <v-container fluid>
    Page: foo
    <v-row>
      <v-col>
        <pre>
            {{ data }}
          </pre>
      </v-col>
      <v-col>
        <p>
          {
          "Name": "tessaadddddddddddddddddddddddddddddddddddddsdddddddddddsddddddddddt"
          }
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>


const fetchClient = useFetchClient()
// const dataGet = ref(await fetchClient.fetchClientFactory['POST']('/beer', { product_id: 1 }))
definePageMeta({
  layout: 'custom'
})
const data = ref(await fetchClient.fetchClientFactory['API']('nuxt_beers'))

</script>

<style scoped></style>
