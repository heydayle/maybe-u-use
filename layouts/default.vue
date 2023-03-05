<template>
  <div>
    <v-app class="tw-bg-gray-900">
      <Header/>
      <AsideMenu />
      <div class="tw-block tw-pt-[5.25rem]">
        <Nuxt class="tw-flex-1"/>
      </div>
    </v-app>
  </div>
</template>

<script>
import Header from '~/components/Common/Header'
import AsideMenu from '~/components/Common/AsideMenu'
export default {
  name: "default",
  components: {
    Header,
    AsideMenu,
  }
}
</script>
