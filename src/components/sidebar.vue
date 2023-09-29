<script setup lang="ts">
import { sidebar_actions } from "@/helpers/sidebar";
</script>

<template>
  <v-navigation-drawer
    :rail="sidebar_actions.show_icons"
    v-model="sidebar_actions.show"
    :temporary="sidebar_actions.show_mobile"
  >
    <v-img src="@/assets/logo/logoipsum.svg" class="h-25 mx-2"></v-img>
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
@/helpers/togglable
