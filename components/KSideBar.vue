
<template>
    <v-navigation-drawer app fixed :expand-on-hover="drawer" v-model="drawer" :rail="rail" permanent @click="rail = false"
        class="overflow-y-auto" style="height: 100vh;">


        <v-list density="compact" nav>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                <template v-slot:append>
                    <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="(item, index) in pages" :key="index" :prepend-icon="item.icon" :title="item.title"
                :value="item.value" :to="item.to" />
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = ref(true)
const rail = ref(true)
const pages = [
    {
        icon: 'mdi-home-city',
        title: 'Home',
        value: 'home',
        to: ''
    },
    {
        icon: 'mdi-account',
        title: 'My account',
        value: 'account',
        to: ''
    },
    {
        icon: 'mdi-account-group-outline',
        title: 'Users',
        value: 'account',
        to: ''
    },
    {
        icon: 'mdi-key',
        title: '1Password',
        value: 'account',
        to: ''
    }
]
</script>

<style scoped></style>
