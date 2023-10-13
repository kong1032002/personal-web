<script lang="ts" setup></script>

<template>
  <v-app>
    <v-layout>
      <k-header class="bg-grey-darken-3 position-fixed" />
      <k-side-bar collapse class="bg-grey-darken-3 position-fixed" />
      <v-main class="bg-grey-darken-4 overflow-hidden">
        <k-breadcrumbs />
        <slot />
        <k-footer />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
