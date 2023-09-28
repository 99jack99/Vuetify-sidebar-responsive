<script lang="ts" setup>
//
import Sidebar from "@/components/sidebar.vue";
import Topvar from "@/components/navbar.vue";
import { ref } from "vue";
</script>

<template>
  <v-app>
    <Sidebar />
    <Topvar />

    <!-- Page content -->
    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
  </v-app>
</template>
