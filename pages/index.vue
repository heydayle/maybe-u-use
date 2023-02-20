<template>
  <div class="tw-overflow-auto tw-p-4 tw-max-h-[90vh]">
    <div class="tw-grid tw-grid-cols-3 tw-gap-4">
      <v-btn
        v-for="(item, index) in categories"
        :key="index"
        text
        dark
        :title="item.name"
        :to="`/${item.name}`"
        class="c-button-h-50"
      >
        <div class="tw-flex tw-flex-col tw-space-y-4">
          <v-img :src="require(`~/assets/icons/${item.icon}`)" width="90"/>
          <p class="tw-text-center">{{ item.name }}</p>
        </div>
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
