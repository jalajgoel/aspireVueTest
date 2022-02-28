<template>
    <div class="accordion accordion-card" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><img :src="require('@/assets/images/card-details.svg')" alt=""><span class="font-14">Card Details</span></button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="w-50 font-14">Name</h6>
                        <p class="w-50 font-14">John Doe</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="w-50 font-14">Card Type</h6>
                        <p class="w-50 font-14">Master</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="w-50 font-14">Bank Name</h6>
                        <p class="w-50 font-14">XYZ Bank</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="w-50 font-14">Credit Limit</h6>
                        <p class="w-50 font-14">5,00,000</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><img :src="require('@/assets/images/recent-transaction.svg')" alt=""><span class="font-14">Recent Transactions</span></button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="p-0 list-unstyled">
                        <li>
                            <a href="#" class="transaction d-flex align-items-start justify-content-between">
                                <div class="d-flex">
                                    <div class="icon primary">
                                        <img :src="require('@/assets/images/file-storage.svg')" alt="">
                                    </div>
                                    <div>
                                        <h6 class="font-14 mb-1">Hamleys</h6>
                                        <small class="font-13">20 May 2020</small>
                                        <div class="d-flex align-items-center">
                                            <span class="type">
                                                <img :src="require('@/assets/images/business-and-finance-1.svg')" alt="">
                                            </span>
                                            <p class="font-12 mb-0">Refund on debit card</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="amount refund">
                                    <span class="font-14">+ S$ 150 <img :src="require('@/assets/images/next.svg')"></span>    
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="transaction d-flex align-items-start justify-content-between">
                                <div class="d-flex">
                                    <div class="icon sucess">
                                        <img :src="require('@/assets/images/flights.svg')" alt="">
                                    </div>
                                    <div>
                                        <h6 class="font-14 mb-1">Hamleys</h6>
                                        <small class="font-13">20 May 2020</small>
                                        <div class="d-flex align-items-center">
                                            <span class="type">
                                                <img :src="require('@/assets/images/business-and-finance-1.svg')" alt="">
                                            </span>
                                            <p class="font-12 mb-0">Charged to debit card</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="amount">
                                    <span class="font-14">+ S$ 150 <img :src="require('@/assets/images/next.svg')"></span>    
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="transaction d-flex align-items-start justify-content-between">
                                <div class="d-flex">
                                    <div class="icon warning">
                                        <img :src="require('@/assets/images/megaphone.svg')" alt="">
                                    </div>
                                    <div>
                                        <h6 class="font-14 mb-1">Hamleys</h6>
                                        <small class="font-13">20 May 2020</small>
                                        <div class="d-flex align-items-center">
                                            <span class="type">
                                                <img :src="require('@/assets/images/business-and-finance-1.svg')" alt="">
                                            </span>
                                            <p class="font-12 mb-0">Charged to debit card</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="amount">
                                    <span class="font-14">+ S$ 150 <img :src="require('@/assets/images/next.svg')"></span>    
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardAccordion',

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