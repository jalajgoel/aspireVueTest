<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <div class="d-flex align-items-center justify-content-between w-100 px-2">
                <h5 class="modal-title" id="CarddetailsLabel">Add Card</h5>
                <div>
                    <button type="button" ref="closebtn" class="btn btn-secondary me-2 a-color-white" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary a-color-white" @click="createCard">Save My Card</button>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="row mx-0">
                <div class="col-md-12 px-2">
                    <div class="form-floating mb-3">
                        <input type="Full Name" required class="form-control" id="floatingName" v-model="card.name">
                        <label for="floatingName">Card Name</label>
                    </div>
                    <!-- <span>Card Name is required</span> -->
                </div>
                <div class="col-md-12 px-2">
                    <div class="form-floating mb-3">
                        <input type="Card No" class="form-control pointer-none" id="floatingCard" v-model="card.number">
                        <label for="floatingCard">Card No.</label>
                    </div>
                </div>
                <div class="col-md-6 px-2">
                    <div class="form-floating mb-2">
                        <input type="Valid Thru" class="form-control pointer-none" id="floatingValid" v-model="card.expirationDate">
                        <label for="floatingValid">Valid Thru</label>
                    </div>
                </div>
                <div class="col-md-6 px-2">
                    <div class="form-floating mb-2">
                        <input type="CVV" class="form-control pointer-none" id="floatingCVV" v-model="card.cvv">
                        <label for="floatingCVV">CVV</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const cardGen = require('card-number-generator')

export default {
  name: 'CardForm',

  props: {},

  data () {
    return {
      card: { }
    }
  },

  components: {
  },

  computed: {
  },

  methods: {
    initCardDetails () {
        this.card = {
            id: this.$store.state.userCards.length,
            name: '',
            expirationDate: this.getCardDate(),
            number: cardGen({issuer: 'MasterCard'}),
            cvv: this.getRandom(100, 999),
            freeze: false
        }
    },

    createCard () {
        this.$store.state.userCards.push( this.card )
        this.$refs.closebtn.click()
    },

    getRandom( min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

    getCardDate () {
        return `${ this.getRandom(1, 12) }/${ this.getRandom(23, 50) }`
    }
  },

  watch: {
  },

  async mounted () {
  }
}
</script>
