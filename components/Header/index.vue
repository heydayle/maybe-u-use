<template>
  <div class="c-header tw-w-full tw-relative">
    <!--    //Share-->
    <div
      class="c-container tw-mx-auto tw-px-2 tw-text-center tw-items-center tw-p-4 tw-items-center tw-space-x-4"
    >
      <!--region @Title-->
      <h1 class="tw-text-xl tw-font-bold tw-text-white">{{header.title}}</h1>
      <h3>{{header.subTitle}}</h3>
      <!--endregion-->
      <!--region @Back-->
      <v-btn
        v-if="isBack"
        text
        class="tw-absolute tw-left-4 tw-top-5"
        @click="$router.back()"
      >
        <v-icon dark>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <!--endregion-->
    </div>
  </div>
</template>

<script>
import { header } from '~/misc/enums/layout'
export default {
  name: "Header",
  props: {
    categories: {
      type: Array,
    }
  },
  data() {
    return {
      header,
      arena: 0,
    }
  },
  computed: {
    isBack() {
      return this.$route.path !== '/'
    }
  }
}
</script>
