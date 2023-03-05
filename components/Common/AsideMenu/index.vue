<template>
  <v-navigation-drawer
      v-model="asideMenuStatus"
      dark
      absolute
      elevation
      floating
      disable-route-watcher
      class="tw-left-0 tw-fixed tw-top-0 tw-z-2 tw-bg-gray-800 tw-space-y-4"
    >
    <v-list class="tw-flex-1" density="compact">
      <v-list-item>
        <v-btn dark text class="tw-w-full" to="/">
          <v-icon >
            mdi-home
          </v-icon>
        </v-btn>
      </v-list-item>
        <v-list-item
          v-for="(item, index) in category"
          :key="index"
          :value="item.id"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-btn
            text
            dark
            :title="item.name"
            :to="`/${item.name}`"
            class="tw-w-full"
          >
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list>
    <div class="tw-relative">
      <v-btn
        @click="onHideAsideMenu"
        icon
        class="tw-absolute tw--right-3 tw-z-4 tw-bg-gray-800"
      >
        <v-icon color="white">
          mdi-chevron-left
        </v-icon>
      </v-btn>
    </div>
</v-navigation-drawer>
</template>
<script>
  import { category } from "~/misc/enums/array";
  import {COMMON_MUTATIONS} from "../../../store/common";
  export default {
    computed: {
      asideMenuStatus() {
        return this.$store.state.common.asideMenuStatus
      }
    },
    data() {
      return {
        category,
      }
    },
    methods: {
      onHideAsideMenu() {
        this.$store.commit(`common/${COMMON_MUTATIONS.UPDATE_ASIDE_MENU_STATUS}`, false)
      }
    }
  }
</script>
