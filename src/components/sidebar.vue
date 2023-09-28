<script setup lang="ts">
import { ref } from "vue";

let drawer = ref<boolean>(true);
let rail = ref<boolean>(false);
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = !rail"
  >
    <v-img src="@/assets/logo/logoipsum.svg" class="h-25"></v-img>
    <v-list>
      <v-list nav>
        <v-list-item prepend-icon="mdi-graph" value="home"
          >Statistics</v-list-item
        >
        <v-list-item prepend-icon="mdi-list-box" value="account"
          >Transactions</v-list-item
        >
        <v-list-item prepend-icon="mdi-cog" value="users">Settings</v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
