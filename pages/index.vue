<template>
  <v-app class="tw-bg-gray-900">
    <div class="tw-overflow-auto">
      <ListHorizontal />
    </div>
  </v-app>
</template>

<script>
import ListHorizontal from "~/components/ListHorizontal";
export default {
  name: 'IndexPage',
  components: { ListHorizontal },
  data() {
    return {
      categories: [],
      banners: [],
      load: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    loading(value) {
      this.load = value
    },
  }
}
</script>
