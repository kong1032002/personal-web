<script lang="ts" setup></script>

<template>
  <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
    <template v-slot:prepend>
      <v-icon size="small" icon="$vuetify"></v-icon>
    </template>
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

<style scoped></style>
