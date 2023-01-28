<template>
  <div>
    <!--    //Share-->
    <div
      class="c-header tw-p-2"
      tw-flex="~"
      tw-h="20"
      tw-items="center"
      tw-space="x-4"
    >
      <v-menu
        offset-x
        open-on-hover
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
        <div>
          <p
            v-for="(item, index) in 10"
            :key="index"
          >
            {{ index }}
          </p>
        </div>
      </v-menu>
      <div tw-overflow="hidden">
        <img
          src="../../assets/images/logo.jpg"
          tw-ocject="cover"
        >
      </div>
      <v-menu
        offset-x
        open-on-hover
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
              <div tw-w="15" tw-m="t-1" tw-text="white left">
                {{ 'Xem giá tại' }}
              </div>
              <div tw-flex="~" tw-items="center">
                {{Arenas[arena].label}}
                <v-icon dark>
                  mdi-chevron-down
                </v-icon>
              </div>
            </div>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in 10"
            :key="index"
          >
            <v-list-item-title>{{ index }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <template v-if="isLG">
        <v-text-field
          class="tw-rounded-lg c-text-field-h-10 c-text-field-details"
          outlined
          placeholder="Tìm kiếm"
        />
        <div
          tw-flex="~"
          tw-text="3.25 white"
        >
          <v-icon
            dark
            large
          >
            mdi-phone
          </v-icon>
          <div>
            <div tw-font="semibold">
              {{ 'Gọi mua hàng' }}
            </div>
            <div><b>{{ '1800.2097' }}</b></div>
          </div>
        </div>
        <div tw-flex="~">
          <v-icon
            dark
            large
          >
            mdi-truck
          </v-icon>
          <div
            tw-font="semibold"
            tw-m="l-2"
            tw-text="3.25 white"
            tw-w="15"
          >
            {{ 'Tra cứu đơn hàng' }}
          </div>
        </div>
        <div>Sign in</div>
      </template>

      <div>Other</div>
    </div>
    <!--    //Mobile-->
    <div
      v-if="isXS"
      tw-w="xs:full"
    >
      <v-text-field placeholder="Search" />
    </div>
    <!--    //Desktop-->
  </div>
</template>

<script>
import { Arenas } from '~/misc/enums/common.js'
export default {
  name: "Header",
  data() {
    return {
      Arenas,
      arena: 0,
    }
  }
}
</script>
