<template>
  <div class="tw-p-4 tw-space-x-4 tw-text-center">
    <v-btn
      v-for="(item, index) in listCategory"
      :key="index"
      text
      dark
      :to="`/list/${item.slug}`"
      class="c-button-h-50"
    >

      <div class="tw-flex tw-flex-col tw-space-y-4">
        <v-img :src="require(`~/assets/icons/${item.icon}.png`)" width="90"/>
        <p class="tw-text-center">{{ item.name }}</p>
      </div>
    </v-btn>
  </div>
</template>

<script>
import { listCategory } from '~/misc/enums/array'
export default {
  name: "List",
  data() {
    return {
      listCategory,
    }
  }
}
</script>
