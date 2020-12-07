<template>
<div id="home-buyers">
<b-modal ref="stripe-modal">
<Stripe :amount="price" :name="name"  :url_image="url_image"></Stripe>
</b-modal>
<div class="container">

<b-form >

	<b-form-group
	label="Bucar"
	label-for='search'
	>
	<b-form-input 
	id="search"
	type="text"
	v-model = 'query'
	>

	</b-form-input>

	</b-form-group>
</b-form>

</div>
<div class="products">
<div>
<div class="container">
<h4> Products</h4>
<div v-for="product in products " :key="product.id">
	<b-card img-src="https://placekitten.com/300/300" img-alt="Product image" img-left class="mb-3">
		
		<b-card-text>
				<h2>{{ product.name }}</h2>
				<div class="container">
				
					<span> <i class = "fa fa-info-square"></i> <strong>{{ product.description }}</strong></span><br>
					<span> <i class="fa fa-building"></i> Vendedor: {{ product.Seller.name }}</span><br>
					<span> <i class="fa fa-dollar-sign"></i> Precio : {{ product.price }}</span>
				</div>
				<b-button  class="shop-button" @click="payMethod2(product.price,product.name)"> <span> <li class="fa fa-shopping-cart"></li></span></b-button>



		</b-card-text>

	</b-card>
</div>
</div>

</div>

	
</div>
</div>

	
</template>

<script>
import environment from '../environment/base'
import axios from 'axios'
import Stripe from '../components/Stripe'

export default {
name:"HomeforBuyers",
components:{
Stripe
			},
	data(){
		return {
			products:[],
			query:'',
			price:null,
			name:null,
			url_image:null,
			stripe_show: false

		}
},
watch:{
query:async function(value){
			const base = environment['dev']
			const result = await axios.get(`${ base._url }/products/seller?search=${ value }`)	
			this.products = result.data.productos

				}

			},
	mounted(){
	const base = environment['dev']
		axios.get(`${base._url}/products/seller`).then(response => {
		console.log(response)
				this.products= response.data.productos
				})
				.catch(err => console.log(err))


	
	},
methods:{
					payMethod(price,name,product){
					console.log('price', price)
					const Sellerid = localStorage.getItem('id')
					console.log(Sellerid)
					this.$router.push(
					{ 
					name:'Stripe'
					,params:{
					amount:price,name,url_image:'https://placekitten.com/300/300',
					product
					} 
					})
					}, 
					searchProducts(evt){
					evt.preventDefault()
					console.log(this.query)

					},
					getProducts(){
					console.log('In getProducts')
					},
payMethod2(price,name){
		console.log('pay method 2')
		this.name = name
		this.price = price
		this.stripe_show= true
		this.url_image = 'https://placekitten.com/300/300'
		this.$refs['stripe-modal'].show()
					}
				},
emits:["get:products"]
}
</script>

<style>
.shop-button{

background-color: #000;

}
</style>
