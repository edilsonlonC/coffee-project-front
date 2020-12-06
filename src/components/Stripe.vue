<template>
<div>

<div class="product-stripe">
<img :src="url_image" alt="product image">
<h3>{{ name }}</h3>

</div>
<stripe-elements
ref="elementsRef"
:pk="publishsableKey"
:amount="amount"
locale="de"
@token="tokenCreated"
@loading='loading = $event'
>
</stripe-elements>
<button @click="submit">Pay {{ amount }}</button>
</div>
</template>

<script>
import { StripeElements } from  'vue-stripe-checkout'
import axios from 'axios'
import environment from '../environment/base'

export default{
props:["amount","product",'name', "url_image"],
components:{
	StripeElements
					},
data: function () {
				return {
				loading:false,
				publishsableKey:'pk_test_51Hv6WqDV9nnhszpkhCzFGvaGGrrhnV3REHqf9JuqTzaEENY6lnhtTXActqPDC7fuoFFrkPRYsFXYEf3uJBeQG9kW009F8ma8VZ',
				token:null,
				charge:null
				}
			},
methods:{
submit: function(){
this.$refs.elementsRef.submit()
				},
tokenCreated: function(token){
this.token = token
	this.charge = {
	source: token.id,
	amount: this.amount,
	description:'description',
	currency:'usd'
	}
	this.sendServer(this.charge)
							},
sendServer: function(charge){
	const base = environment['dev']
	axios.post(`${base._url}/pay/stripe`, charge)
	.then(response => console.log('response server', response))
	.catch(err => console.log(err))
		

						}
				}
				}

</script>

<style>

</style>
