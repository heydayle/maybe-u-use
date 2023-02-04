<template>
  <div class="tw-p-4 tw-w-full">
    <div class="tw-flex tw-space-x-4 tw-overflow-x-auto">
      <div
        v-for="(item, index) in 10"
        class="tw-bg-gray-500 tw-rounded-lg tw-min-w-full sm:tw-min-w-[50%] lg:tw-min-w-[20%]"
      >
        <div class="tw-p-4">
          <img src="~/assets/images/heyday.png" alt="">
        </div>
        <div class="tw-flex tw-flex-col tw-flex-1 tw-p-4 tw-border-t-1 tw-border-solid tw-border-white-400">
          <div>
            <h2 class="tw-font-bold">Title {{index}}</h2>
            <p class="tw-leading-normal">${{index * 2}}</p>
          </div>
          <div>
            <v-btn class="c-button-header tw-w-full">Buy</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List"
}
</script>
