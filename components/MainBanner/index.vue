<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div v-for="(item, i) in banners" :key="i" class="swiper-slide" :class="`slide--${i}`">
        <div class="slider-content">
          <v-img class="tw-w-full tw-object-fit-cover" :src="item"/>
        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev tw-text-white tw-text-lg"></div>
    <div class="swiper-button-next tw-text-white tw-text-lg"></div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: "MainBanner",
  props: {
    banners: {
      type: Array
    }
  },
  data() {
    return {
      images: [
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/a733.png',
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/apple%20watchh.jpg',
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/tet-macbook-air-m2-slide4.jpg',
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/tw967.png',
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/robot_roborock.jpg',
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/samsung_TV.png',
        'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/chuot_gaming_havite.jpg'
      ]
    }
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>
<style scoped>
.swiper {
  position: relative;
  width: 94%;
  border-radius: 20px;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.slider-content {
  width: 100%;
  color: #000;
  border-radius: 20px;
  background-color: #fff;
  img {
    object-fit: fill;
  }
}
</style>
