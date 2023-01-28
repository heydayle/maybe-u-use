import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({
    computed: {
      isXS() {
        return this.$store.getters['dom/isXS']
      },
      isSM() {
        return this.$store.getters['dom/isSM']
      },
      isMD() {
        return this.$store.getters['dom/isMD']
      },
      isLG() {
        return this.$store.getters['dom/isLG']
      },
      isXL() {
        return this.$store.getters['dom/isXL']
      },
    },
    methods: {},
  }) // Set up your mixin then
}
