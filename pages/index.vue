<template>
  <v-app>
  <div
    tw-m="x-auto"
    tw-w="xl:300"
  >
    <Header />
    <div tw-flex="~">
      <div tw-p="4">
        menu
      </div>
      <div
        tw-bg="gray"
        tw-flex="1"
        tw-text="center"
      >
        banner
      </div>
      <div tw-p="4">
        mini banner q
      </div>
    </div>
    <div
      tw-flex="1"
      tw-text="center"
    >
      Banner full
    </div>
  </div>
  </v-app>
</template>

<script>
import Header from "../components/Header";
export default {
  name: 'IndexPage',
  components: { Header },
  mounted() {
    const windowWith = window.innerWidth
    const windowHeight = window.innerHeight
    this.$store.commit('dom/SET_WINDOW_WIDTH', windowWith)
    this.$store.commit('dom/SET_WINDOW_HEIGHT', windowHeight)
  }
}
</script>
