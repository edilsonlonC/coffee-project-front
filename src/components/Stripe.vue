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
<button @click="submit">Pagar {{ amount }}</button>
</div>
</template>

<script>
import { StripeElements } from  'vue-stripe-checkout'
import axios from 'axios'
import environment from '../environment/base'

export default{
			props:{
			amount:Number,
			product:Object,
			name:String,
			url_image:String,
			SellerId:Number
			},
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
		const id  = localStorage.getItem('id')
		console.log(id)
		const data = {
		charge,
		order : {
		BuyerId:id,
		ProductId:this.product.id,
		}
		}
	axios.post(`${base._url}/pay/stripe`, data)
		.then(response => {
		console.log(response)
		location.reload()
				})
	.catch(err => console.log(err))
		

						}
				}
				}

</script>

<style>
div img{
border-radius:99%;
width: 300px;
height:300px;
}

</style>
