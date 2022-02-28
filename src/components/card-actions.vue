<template>
    <div class="card-menu mt-12" v-if="$store.state.userCards.length > 0">
        <ul class="list-inline mb-0">
            <li class="list-inline-item">
                <a class="d-flex align-items-center flex-column" @click="freezeCard">
                    <span class="img">
                        <img :src="require('@/assets/images/Freeze-card.svg')" alt="">
                    </span>
                    <span class="font-12">{{ userCard.freeze ? 'Unfreeze Card' : 'Freeze Card' }}</span>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="d-flex align-items-center flex-column">
                    <span class="img">
                        <img :src="require('@/assets/images/Set-spend-limit.svg')" alt="">
                    </span>
                    <span class="font-12">Set Spend Limit</span>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="d-flex align-items-center flex-column">
                    <span class="img">
                        <img :src="require('@/assets/images/GPay.svg')" alt="">
                    </span>
                    <span class="font-12">Add to Gpay</span>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="d-flex align-items-center flex-column">
                    <span class="img">
                        <img :src="require('@/assets/images/Replace-card.svg')" alt="">
                    </span>
                    <span class="font-12">Replace Card</span>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="d-flex align-items-center flex-column" @click="cancelCard">
                    <span class="img">
                        <img :src="require('@/assets/images/Deactivate-card.svg')" alt="">
                    </span>
                    <span class="font-12">Cancel Card</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CardActions',

  props: {
    userCard: {
        type: Object,

        default() {
            return {}
        }
    },
    currentIndex: {
        type: Number,
        default: 0
    }
  },

  data () {
    return {
    }
  },

  components: {
  },

  computed: {
  },

  methods: {
    freezeCard () {
        this.userCard.freeze = !this.userCard.freeze 
    },

    cancelCard () {
        if ( confirm('Are you sure you want to delete?') ) {
          this.$store.state.userCards.splice( (this.currentIndex), 1 )     
        }
    }
  },

  watch: {
  },

  async mounted () {
  }
}
</script>