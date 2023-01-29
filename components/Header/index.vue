<template>
  <div class="c-header tw-w-full tw-py-2">
    <!--    //Share-->
    <div
      class="c-container tw-mx-auto tw-py-2 tw-px-2 tw-flex tw-flex-row tw-justify-center tw-h-20 tw-items-center tw-space-x-4"
    >
      <v-menu
        v-if="isLG"
        offset-x
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="white"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark>
              mdi-menu
            </v-icon>
          </v-btn>
        </template>
        <div class="tw-flex tw-flex-col">
          <div
            v-for="(item, index) in categories"
            :key="index"
            class="tw-bg-white"
          >
            <v-menu
              offset-x
              open-on-hover
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="tw-w-full"
                >
                  {{ item.label }}
                  <v-icon :dark="!item.childs">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </template>
              <template v-if="item.childs">
                <v-btn
                  v-for="(child) in item.childs"
                  :key="item.id"
                >
                  {{ child.label }}
                </v-btn>
              </template>
            </v-menu>
          </div>
        </div>
      </v-menu>
      <div class="tw-overflow-hidden">
        <img
          src="../../assets/images/logo.jpg"
          class="tw-object-cover"
        >
      </div>
      <v-menu
        offset-x
      >
        <template #activator="{ on, attrs }">
          <v-btn
            class="c-button-header"
            dark
            solo
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark>
              mdi-map-marker
            </v-icon>
            <div>
              <div
                class="tw-w-15 tw-mt-1 tw-text-white tw-text-left"
              >
                {{ 'Xem giá tại' }}
              </div>
              <div
                class="tw-flex tw-items-center"
              >
                {{ Arenas[arena].label }}
                <v-icon dark>
                  mdi-chevron-down
                </v-icon>
              </div>
            </div>
          </v-btn>
        </template>
        <v-list color="white">
          <v-list-item
            v-for="(item, index) in Arenas"
            :key="index"
          >
            <v-list-item-title>
              <v-btn @click="arena=item.value">
                {{ item.label }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <template v-if="isLG">
        <v-text-field
          class="tw-rounded-lg tw-p-0 tw-m-0 c-text-field-h-10 c-text-field-details"
          placeholder="Tìm kiếm"
        >
          <template #prepend>
            <v-icon class="tw-mt-2 tw-ml-1">
              mdi-magnify
            </v-icon>
          </template>
        </v-text-field>
        <div
          class="tw-flex tw-text-3.25 tw-text-white"
        >
          <v-icon
            dark
            large
          >
            mdi-phone
          </v-icon>
          <div>
            <div class="tw-font-semibold">
              {{ 'Gọi mua hàng' }}
            </div>
            <div><b>{{ '1800.2097' }}</b></div>
          </div>
        </div>
        <div
          class="tw-flex tw-text-3.25 tw-text-white"
        >
          <v-icon
            dark
            large
          >
            mdi-map-marker
          </v-icon>
          <div>
            <div class="tw-font-semibold tw-w-14">
              {{ 'Cửa hàng gần bạn' }}
            </div>
          </div>
        </div>
        <div class="tw-flex">
          <v-icon
            dark
            large
          >
            mdi-truck
          </v-icon>
          <div
            class="tw-font-semibold tw-m-l-2 tw-text-3.25 tw-text-white tw-w-15"
          >
            {{ 'Tra cứu đơn hàng' }}
          </div>
        </div>
      </template>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            class="c-button-header"
            dark
            solo
            v-bind="attrs"
            v-on="on"
          >
            <div>
              <v-icon>mdi-cart-outline</v-icon>
              <div
                class="tw-text-center tw-text-white tw-w-15"
              >
                {{ 'Giỏ hàng' }}
              </div>
            </div>
          </v-btn>
        </template>
      </v-menu>
    </div>
    <!--    //Mobile-->
    <div
      v-if="isXS"
      class="tw-w-full tw-px-4"
    >
      <v-text-field
        class="tw-rounded-lg  tw-p-0 tw-m-0 c-text-field-h-10 c-text-field-details"
        placeholder="Tìm kiếm"
      >
        <template #prepend-inner>
          <v-icon class="tw-mt-1 tw-ml-1">
            mdi-magnify
          </v-icon>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script>
import { Arenas } from '~/misc/enums/common.js';
export default {
  name: "Header",
  props: {
    categories: {
      type: Array,
    }
  },
  data() {
    return {
      Arenas,
      arena: 0,
    }
  },
}
</script>
