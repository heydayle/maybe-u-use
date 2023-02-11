<template>
  <div class="tw-p-4 tw-w-full tw-overflow-y-auto">
    <v-expansion-panels
      accordion
      dark
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h1>List Horizontal</h1>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow" />
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
            <v-tabs-items dark v-model="tab">
              <v-tab-item
                v-for="item in items"
                :key="item"
                eager
              >
                <pre v-highlightjs>
                  <code class="javascript">{{ list.horizontal[item] }}</code>
                </pre>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="tw-flex tw-space-x-4 tw-overflow-x-auto tw-mt-4">
      <div
        v-for="(item, index) in 10"
        class="tw-bg-gray-800 tw-rounded-lg tw-min-w-full sm:tw-min-w-[50%] lg:tw-min-w-[20%]"
      >
        <div class="tw-p-4">
          <img
            src="~/assets/images/heyday.png"
            alt=""
          >
        </div>
        <div class="tw-flex tw-flex-col tw-flex-1 tw-p-4 tw-border-t-1 tw-border-solid tw-border-white-400">
          <div>
            <h2 class="tw-font-bold">
              Title {{ index }}
            </h2>
            <p class="tw-leading-normal">
              ${{ index * 2 }}
            </p>
          </div>
          <div>
            <v-btn class="c-button-header tw-w-full">
              Buy
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueHighlightJS from 'vue-highlightjs'
import { list } from '~/misc/enums/code.js'
export default {
  name: 'List',
  components: { VueHighlightJS },
  data() {
    return {
      list,
      tab: 0,
      items: [ 'vue','html','css'],
      horizontalCode: list.horizontal
    }
  },
  method: {
    // highlighter() {
    //   return highlight(this.horizontalCode, languages.js)
    // }
  }
}
</script>
