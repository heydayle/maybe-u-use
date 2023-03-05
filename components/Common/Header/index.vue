<template>
  <div class="c-header tw-w-full tw-fixed tw-z-2">
    <!--    //Share-->
    <div
      class="c-container tw-mx-auto tw-px-2 tw-text-center tw-items-center tw-p-4 tw-items-center"
    >
      <!--region @Title-->
      <h1 class="tw-text-xl tw-font-bold tw-text-white" @click="$router.push('/')">{{header.title}}</h1>
      <v-typical
        class="tw-h-6 tw-border-b-1 tw-border-green-800"
        :steps="[`Hello World! I'm Heyday Le`, 1000, `Follow me on github @heydayle`, 1000]"
        :loop="Infinity"
        :wrapper="'span'"
      ></v-typical>
      <span class="tw-animate-ping tw-animate-infinite tw-m-0 tw-text-white">|</span>
      <!--endregion-->
      <!--region @Back-->
      <v-btn
        text
        class="tw-absolute tw-left-4 tw-top-5"
        @click="setAsideMenu"
      >
        <v-icon dark class="tw-text-white tw-animate-shakeX tw-animate-infinite">
          mdi-menu
        </v-icon>
      </v-btn>
      <!--endregion-->
      <!--region @Social-->
      <div class="tw-absolute tw-right-4 tw-top-5">
        <div class="tw-flex">
          <v-btn
            :href="'https://github.com/heydayle/maybe-u-use'"
            icon
            class=""
            target="_blank"
            title="Visit Github"
          >
            <v-icon dark>
              mdi-github
            </v-icon>
          </v-btn>
        </div>
      </div>
      <!--endregion-->
    </div>
  </div>
</template>

<script>
import { header } from '~/misc/enums/layout'
import VTypical from 'vue-typical';
import {COMMON_MUTATIONS} from "../../../store/common";
export default {
  name: "Header",
  components: {
    VTypical,
  },
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
    },
    asideMenuStatus() {
      return this.$store.state.common.asideMenuStatus
    }
  },
  methods: {
    setAsideMenu() {
      this.$store.commit(`common/${COMMON_MUTATIONS.UPDATE_ASIDE_MENU_STATUS}`, !this.asideMenuStatus)
    }
  }
}
</script>
