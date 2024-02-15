<template>
  <div>
    Page: foo
  </div>
  <pre>
    {{ data }}
  </pre>
</template>

<style scoped></style>

<script lang="ts" setup>
const data = ref({})

await useFetchClient().fetchClientFactory.POST('https://api.sticpay.com/rest_pay/pay',
  {
    "merchant_email": "greenpotserviceslimited@gmail.com",
    "order_no": "12345abcde",
    "order_time": "2021-10-20 11:14:23",
    "order_amount": "10.23",
    "order_currency": "USD",
    "sign": "b1008105b9e203b64cb9a4691095f13c",
    "interface_version": "sandbox"
  }
).then((result) => {
  console.log(result)
  data.value = result
}).catch((err) => {
  console.log(err)
  data.value = err
});

</script>