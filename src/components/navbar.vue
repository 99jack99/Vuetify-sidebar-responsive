<script setup lang="ts">
import { sidebar_actions } from "@/helpers/sidebar";
</script>

<template>
  <v-app-bar>
    <!-- Expand actions -->
    <v-app-bar-nav-icon
      ><v-icon
        icon="mdi-arrow-expand-horizontal"
        @click="sidebar_actions.open_sidebar()"
      ></v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-avatar color="surface-variant"></v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
@/helpers/togglable
