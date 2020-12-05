<template>
<div id = "coffee-home" class="container"> 
	<b-card v-for="product in products" :key="product.id"
	:title = "product.name"
	img-src = "https://picsum.photos/600/200/?image=25"
	img-top
	style="max-width: 50rem"
	class="mb-5 card"
	>
		<b-card-text>
			{{ product.description }}
		</b-card-text>
		<b-button href='#'  class="button-shop" style="background-color:#7c1d1d">
		{{ product.price }}
		</b-button>

	</b-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "CoffeeHome",
					data(){
						return {
						url_img: null,
						products : null
						}
					},
					mounted(){
					axios.get('http://localhost:3000/api/products')
						.then(response => {
									this.products = response.data.productos
									this.url_img = `http://localhost:3000/`
								})
					}
	}


</script>


<style> 

#coffee-home{
text-align: center;

}

.slide{
	position: relative;
	border: 2px solid #3cc;
	width:100%;
	text-align:center;
}

.slide div{
	text-align: center;
}

.slide div img{

	width: 100%;

}

.card{
	
	margin:10px;
	margin-left:20px;
	box-shadow:1px 1px #000;
		
}

.card:hover{
	box-shadow:1.1px 1.1px #7c1d1d;
}



</style>
