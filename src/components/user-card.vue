<template>
  <div>
    <div class="cc-card green" :style="userCard.freeze ? 'opacity: 0.6 !important' : ''">
      <div class="cc-card-body">
          <img :src="require('@/assets/images/Logo-w.svg')" class="card-logo" alt="">
          <h5 class="font-24 mb-0"> {{ userCard.name }} </h5>
          <div class="d-flex align-items-center">
              <p class="card-no mb-0 me-4"><span class="hidden-no"></span><span class="hidden-no"></span><span class="hidden-no"></span><span class="hidden-no"></span></p>
              <p class="card-no mb-0 me-4"><span class="hidden-no"></span><span class="hidden-no"></span><span class="hidden-no"></span><span class="hidden-no"></span></p>
              <p class="card-no mb-0 me-4"><span class="hidden-no"></span><span class="hidden-no"></span><span class="hidden-no"></span><span class="hidden-no"></span></p>
              <p class="card-no mb-0 me-4">
                <span class="font-14"> {{ userCard.number[12] }} </span>
                <span class="font-14"> {{ userCard.number[13] }} </span>
                <span class="font-14"> {{ userCard.number[14] }} </span>
                <span class="font-14"> {{ userCard.number[15] }} </span>
              </p>
          </div>
          <div class="valid d-flex">
              <p class="font-13 mb-0 me-4"><span>Thru:</span><span>{{ userCard.expirationDate }}</span></p>
              <p class="font-13 mb-0"><span>CVV:</span><span>***</span></p>
          </div>
          <img :src="require('@/assets/images/VisaLogo.svg')" alt="" class="visa-image">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserCard',

  props: {
    userCard: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
    }
  },

  components: {
    // CardActions
  },

  computed: {
  },

  methods: {
  },

  watch: {
  },

  async mounted () {
  }
}
</script>