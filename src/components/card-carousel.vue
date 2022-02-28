<template>
  <div>
    <template v-if="userCards.length">
      <div class="show-no">
        <a class="font-12 mb-2">
            <img class="me-2" :src="('@/assets/images/remove_red_eye-24px.svg')" alt="">
            Show Card Number
        </a>
      </div>
      <vue-slick-carousel v-if="userCards.length" v-bind="settings" ref="carousel" @afterChange="slideChange" :key="carouselKey">
        <user-card v-for="item in userCards" :key="getKey(item)" :user-card="item"></user-card>
      </vue-slick-carousel>
    </template>

    <card-actions :user-card="$store.state.userCards[currentIndex]" :current-index="currentIndex"></card-actions>
  </div>
</template>

<script>
  import UserCard from '@/components/user-card'
  import CardActions from '@/components/card-actions'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  import VueSlickCarousel from 'vue-slick-carousel'

  export default {
    name: 'CardCarousel',

    props: {
      cards: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        settings: {
          "dots": true,
          "arrow": true,
          "fade": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1
        },
        currentIndex: 0,
        carouselKey: 0,
        userCards: []
      }
    },

    components: {
      VueSlickCarousel,
      UserCard,
      CardActions
    },

    watch: {
      userCards () {
        this.forceRerender()
      }
    },

    methods: {
      getKey (card) {
        return `${ card.name.toLowerCase().replace(' ', '_') }_${ Math.floor(Math.random() * 101) }`
      },

      slideChange (slideIndex) {
        this.currentIndex = slideIndex
      },

      forceRerender() {
        this.carouselKey += 1
      }
    },

    mounted() {
      this.userCards = this.$store.state.userCards
    }
  }
</script>