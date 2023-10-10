
<template>
  <div>
    Page: foo
    <pre>
      {{ data }}
    </pre>
  </div>
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
