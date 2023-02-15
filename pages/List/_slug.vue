<template>
  <div class="tw-grid tw-grid-cols-[1fr,300px] tw-h-[calc(100%-84px)]">
    <div class="tw-overflow-y-auto">
      <component :is="name" />
    </div>
    <div class="tw-p-4">
      <div class="tw-text-gray-100 tw-pb-2 tw-mb-4 tw-border-b-1">
        Category
      </div>
      <div v-for="(item, index) in listCategory">
        <router-link
          :key="index"
          :to="`/list/${item.slug}`"
          class="tw-text-gray-600"
          :class="{ 'tw-text-gray-200': name === item.slug }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ListHorizontal from "~/components/ListHorizontal";
import { listCategory } from "~/misc/enums/array";
export default {
  components: { horizontal: ListHorizontal },
  async asyncData({ params }) {
    const slug = params.slug;
    const id = listCategory.find((e) => e.slug === slug).id;
    return { slug, id };
  },
  data() {
    return {
      listCategory,
      name: "",
      id: "",
    };
  },
  beforeMount() {
    this.getSlug();
  },
  methods: {
    getSlug() {
      this.name = this.$route.params?.slug;
      this.id = this.$route.params?.id;
    },
  },
};
</script>
