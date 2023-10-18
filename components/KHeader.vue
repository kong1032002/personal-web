<script lang="ts" setup>
const projects = ref(['SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik', 'SnapTik'])
</script>

<template>
  <v-app-bar app bordered>
    <template v-slot:image>
      <v-img></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Title</v-app-bar-title>
    </template>
    <v-spacer></v-spacer>

    <!-- <v-list class="d-flex">
      <v-list-item class=" opacity-100" v-for="(item, index) in projects" :key="index" :title="item">
      </v-list-item>
    </v-list>
    <v-spacer></v-spacer> -->

    <template v-slot:append>
      <div>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped></style>
