<template>
  <div class="sidebar">
    <div class="logo">
        <img src="images/Logo.png" alt="" class="mb-3">
        <p class="font-15 mb-5">Trusted way of banking for 3,000+ SMEs and startups in Singapore.</p>
    </div>
    <div class="sidebar-menu">
        <ul class="sidebar-menu-item mb-0 list-unstyled px-0">
            <li>
                <a href="#">
                    <!-- <img class="me-3" :src="require('@/assets/images/home.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/home-b.png')" alt=""> -->
                    <img class="me-3" :src="require('@/assets/images/Home-active.png')" alt="">
                    Home
                </a>
            </li>
            <li>
                <a href="#" class="active">
                    <img class="me-3" :src="require('@/assets/images/Card.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Card-b.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Card-active.png')" alt="">
                    Cards
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="me-3" :src="require('@/assets/images/Credit.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Credit-b.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Credit-active.png')" alt="">
                    Payments
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="me-3" :src="require('@/assets/images/Payments.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Payments-b.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Payments-active.png')" alt="">
                    Credit
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="me-3" :src="require('@/assets/images/Account.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Account-b.png')" alt="">
                    <img class="me-3" :src="require('@/assets/images/Account-active.png')" alt="">
                    Settings
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'Sidebar',

  props: {},

  data () {
    return {
    }
  },

  components: {
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