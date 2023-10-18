<script lang="ts" setup></script>

<template>
  <v-container fluid>
    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']" class="bg-grey-darken-3">
      <template v-slot:prepend>
        <v-icon size="small" icon="$vuetify"></v-icon>
      </template>
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>

      </template>
    </v-breadcrumbs>
  </v-container>
</template>

<style scoped></style>
