<script lang="ts" setup></script>

<template>
  <v-app>
    <v-layout class="d-flex flex-column" style="min-height: 150vh;">
      <k-header class="bg-grey-darken-3 position-fixed" :elevation="21" />
      <k-side-bar collapse class="bg-grey-darken-3 position-fixed" />
      <v-main class="bg-grey-darken-4 overflow-hidden flex-grow-1">
        <k-breadcrumbs />
        <v-container fluid>
          <slot />
        </v-container>
        <k-footer class="bottom-0" />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
