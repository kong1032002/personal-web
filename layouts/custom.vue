<script lang="ts" setup></script>

<template>
  <v-app>
    <v-layout>
      <k-header class="bg-grey-darken-3" />
      <k-side-bar class="bg-grey-darken-3" />
      <v-main class="bg-grey-darken-4 overflow-hidden">
        <v-container fluid>
          Layout: custom
          <v-scroll>
            <!-- <slot /> -->
            <k-footer />
          </v-scroll>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
