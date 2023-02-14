<template>
  <div class="tw-overflow-auto tw-p-4">
    <div class="tw-space-x-4 tw-p-2">
      <v-btn
        v-for="(item, index) in categories"
        :key="index"
        text
        dark
        :to="`/${item.name}`"
      >
        {{ item.name }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { category } from "~/misc/enums/array";
export default {
  name: "IndexPage",
  data() {
    return {
      categories: category,
      banners: [],
      load: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    loading(value) {
      this.load = value;
    },
  },
};
</script>
