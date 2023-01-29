<template>
  <div class="tw-flex tw-flex-col">
    <v-btn
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
          >
            {{ item.label }}
            <v-icon :dark="!item.childs" >
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </template>
        <template v-if="item.childs">
          <v-btn
            v-for="(child) in item.childs"
            :key="item.id"
            class="tw-w-full"
          >
            {{ child.label }}
          </v-btn>
        </template>
      </v-menu>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    categories: {
      type: Array,
    },
    loading: {
      type: Boolean,
    }
  },
}
</script>
