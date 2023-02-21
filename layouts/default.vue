<template>
  <div>
    <v-app class="tw-bg-gray-900">
      <Header/>
      <Nuxt />
    </v-app>
  </div>
</template>

<script>
import Header from '~/components/Common/Header'
export default {
  name: "default",
  components: {
    Header,
  }
}
</script>
