<template>
<div id="home-buyers">
<SearchProducts/>
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
				<b-button @click="payMethod(product.price,product.name,product)"> <span> <li class="fa fa-shopping-cart"></li></span></b-button>



		</b-card-text>

	</b-card>
</div>
</div>

</div>

	
</div>
</div>
	
</template>

<script>
import SearchProducts from '../components/SearchProducts'
import environment from '../environment/base'
import axios from 'axios'

export default {
name:"HomeforBuyers",
components:{
			SearchProducts
			},
	data(){
		return {
			products:[]

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
					}
				}
}
</script>

<style>

</style>
