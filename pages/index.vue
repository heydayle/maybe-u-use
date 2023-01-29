<template>
  <v-app>
    <div class="tw-space-y-4">
      <Header :categories="categories" />
      <div
        class="c-container tw-mx-auto tw-grid tw-grid-cols-[100px,1fr,min-content] tw-grid-rows-1"
        :class="isXL ? 'tw-grid-cols-[100px,1fr,min-content]' : 'tw-grid-cols-1'"
      >
        <div v-if="isXL" class="tw-col-span-1 tw-rounded-xl">
          <Category
            v-bind="{
              categories
            }"
          />
        </div>
        <div
          class="tw-col-span-1 tw-flex tw-flex-1 tw-overflow-hidden tw-text-center"
        >
<!--          <MainBanner/>-->
        </div>
        <div v-if="isXL" class="tw-col-span-1 tw-flex tw-flex-col tw-space-y-4">
          <div v-for="(item, index) in 3">
            <v-img class="tw-rounded-lg" height="70" src="https://picsum.photos/200/300" />
          </div>
        </div>
      </div>
      <div
        class="c-container tw-mx-auto tw-flex-1 tw-text-center"
      >
        <v-img src="https://cdn2.cellphones.com.vn/1200x75,webp,q100/https://dashboard.cellphones.com.vn/storage/special-desktop.png"/>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "~/components/Header";
import Category from "~/components/Category";
import { GetCategories } from "~/api/common";
import MainBanner from "../components/MainBanner";
export default {
  name: 'IndexPage',
  components: { MainBanner, Category, Header },
  data() {
    return {
      categories: [],
      load: false
    }
  },
  created() {
    this.fetchCategory()
  },
  mounted() {
    const windowWith = window.innerWidth
    const windowHeight = window.innerHeight
    this.$store.commit('dom/SET_WINDOW_WIDTH', windowWith)
    this.$store.commit('dom/SET_WINDOW_HEIGHT', windowHeight)
  },
  methods: {
    loading(value) {
      this.load = value
    },
    fetchCategory() {
      this.loading(true)
      GetCategories()
        .then(response => {
          const result = response.data
          if (result) {
            this.categories = result
          }
        })
        .catch(error => {
          console.log(error.response.data.error.message)
        })
        .finally(_ => {
          this.loading(false)
        })
    }
  }
}
</script>
