
<template>
    <v-navigation-drawer app fixed :expand-on-hover="drawer" v-model="drawer" :rail="rail" permanent @click="rail = false"
        class="overflow-y-auto" style="height: 100vh;">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
            <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = ref(true)
const rail = ref(true)
</script>

<style scoped></style>
