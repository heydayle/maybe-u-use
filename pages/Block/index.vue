<template>
  <div class="tw-p-4 tw-space-x-4 tw-text-center">
    <v-btn
      v-for="(item, index) in blockCategory"
      :key="index"
      text
      dark
      :to="{
        path: $route.path+'/'+item.slug,
        params: {
          slug: item.slug,
          parent: $route.path
        }
      }"
      class="c-button-h-50"
    >
      <div class="tw-flex tw-flex-col tw-space-y-4">
        <!--        <v-img :src="require(`~/assets/icons/${item.icon}.png`)" width="90"/>-->
        <p class="tw-text-center">
          {{ item.name }}
        </p>
      </div>
    </v-btn>
  </div>
</template>

<script>
import { blockCategory } from "~/misc/enums/array";

export default {
  name: "Block",
  data() {
    return {
      blockCategory,
    }
  }
}
</script>

<style scoped>

</style>
