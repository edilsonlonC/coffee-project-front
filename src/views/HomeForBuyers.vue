<template>
<div id="home-buyers">
<div class="nav-product-seller">
	<a href="#" class="menu-icon" v-b-toggle.sidebar-no-header> <i class="fa fa-sliders-h"></i> </a>
	<a href="#" class="logo-item"  v-b-toggle.sidebar-no-header> <span><i class="fas fa-mug-hot"></i>Tecnura</span> </a>
</div>
<div>
    <b-sidebar   id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3 slide-seller">
          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item  @click="CloseSesion">Cerrar Sesión</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary button-nav" block @click="hide">Cerrar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>


<b-modal ref="stripe-modal" :hide-footer="true">
<Stripe :amount="price" :name="name"  :url_image="url_image"
:product="product_pay"

></Stripe>
</b-modal>
<div class="container">

<b-form class="search-products">

	<b-form-group
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
<div v-for="product in products " :key="product.id">
	<b-card 
	:img-src="product.img ? 'http://localhost:3000/uploads/' + product.img : 'http://localhost:3000/uploads/default.png'" 
	img-alt="Product image" 
	img-left class="mb-3 card-buyer-product">
		
		<b-card-text>
				<h2>{{ product.name }}</h2>
				<div class="container">
				
					<span> <i class = "fa fa-info-square"></i> <strong>{{ product.description }}</strong></span><br>
					<span> <i class="fa fa-building"></i> Vendedor: {{ product.Seller.name }}</span><br>
					<span> <i class="fa fa-dollar-sign"></i> Precio : {{ product.price }}</span>
				</div>
				<b-button  class="shop-button" @click="payMethod2(product.price,product.name,product)"> <span> <li class="fa fa-shopping-cart"></li></span></b-button>



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
			stripe_show: false,
			product_pay:null

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
payMethod2(price,name,product){
		this.name = name
		this.price = price
		this.stripe_show= true
		this.url_image = product.img ? 'http://localhost:3000/uploads/' + product.img : 'http://localhost:3000/uploads/default.png'
		console.log('url',this.url_image)
		this.product_pay = product
		this.$refs['stripe-modal'].show()
					},
CloseSesion(){
localStorage.removeItem('id')
localStorage.removeItem('token')
this.$router.push({path: "/"})
}
				},
emits:["get:products"]
}
</script>

<style>
.shop-button{

background-color: #000;

}
.card-buyer-product img{
width:300px;

}
.search-products{
margin-top:25px;
}
</style>
