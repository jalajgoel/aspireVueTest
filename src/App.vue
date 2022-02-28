<template>
  <v-app>
    <v-main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 px-0">
                    <sidebar></sidebar>
                </div>
                <div class="col-md-9 px-0">
                    <div class="section-main">
                        <div class="section-head mb-4 d-flex align-items-center justify-content-between">
                            <div class="head-left">
                                <small class="font-13 mb-2 d-block font-white">Available Balance</small>
                                <h4 class="font-24 d-flex align-items-center font-white"><span class="font-13">S$</span>3,000</h4>
                            </div>
                            <div class="head-right">
                                <a @click="$refs.cardform.initCardDetails()" class="btn btn-primary btn-lg font-13 a-color-white" tabindex="-1" role="button" aria-disabled="true" data-bs-toggle="modal" data-bs-target="#Carddetails"><img :src="require('@/assets/images/box.svg')" alt="add">New Card</a>
                            </div>
                        </div>
                        <div class="section-body">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link font-white font-14 active" id="my-debit-tab" data-bs-toggle="pill" data-bs-target="#my-debit" type="button" role="tab" aria-controls="my-debit" aria-selected="true">My Debit Cards</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button disabled class="nav-link font-white font-14" id="all-company-tab" data-bs-toggle="pill" data-bs-target="#all-company" type="button" role="tab" aria-controls="all-company" aria-selected="false">All Company Cards</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="my-debit" role="tabpanel" aria-labelledby="my-debit-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div>
                                                <div class="card-carousel">
                                                    <card-carousel :cards="$store.state.userCards"></card-carousel>
                                                </div>                                     
                                            </div>
                                        </div>
                                        <div class="col-md-6 mobile-bg">
                                            <card-accordion></card-accordion>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="all-company" role="tabpanel" aria-labelledby="all-company-tab">
        
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="modal fade" id="Carddetails" tabindex="-1" aria-labelledby="CarddetailsLabel" aria-hidden="true">
                <card-form ref="cardform"></card-form>
            </div>
        </div>

    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/sidebar'
import CardAccordion from '@/components/card-accordion'
import CardCarousel from '@/components/card-carousel'
import CardForm from '@/components/card-form'

export default {
  name: 'App',

  data () {
    return {
        settings: {
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
    }
  },

  components: {
    Sidebar,
    CardAccordion,
    CardCarousel,
    CardForm
  },

  computed: {
  },

  methods: {
    // initCardForm () {
    //     this.$refs.cardForm.initCardDetails()
    // }
  },

  watch: {
  },

  async mounted () {
  },

  async updated () {
  }
}
</script>
