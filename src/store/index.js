import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userCards: [
			{
				id: 1,
				name: 'John Doe',
				expirationDate: '12/24',
				number: '1234563216789198',
				cvv: '123',
				freeze: false
			},
			{
				id: 2,
				name: 'Elena Gilbert',
				expirationDate: '01/29',
				number: '9999444488120087',
				cvv: '456',
				freeze: false
			}
		]
	}
})

export default store