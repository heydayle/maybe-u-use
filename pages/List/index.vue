<template>
  <div class="tw-p-4 tw-space-x-4">
    <v-btn
      v-for="(item, index) in listCategory"
      :key="index"
      text
      dark
      :to="`/list/${item.slug}`"
    >
      {{ item.name }}
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
