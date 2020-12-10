<template>

<div class="container container-orders">
<div class="container container-order" v-for="order in orders" :key="order.id">
<b-card @click="OrderMethod" class="card-orders">
<strong> id Orden</strong> : {{ order.id_order }}<br>
<strong> Comprador </strong> : {{ order.Buyer.name }} <br>
<strong> Fecha </strong>  : {{ order.createdAt }} <br>
<strong> Producto </strong> : {{ order.Product.name }}
</b-card>


</div>

</div>	
</template>

<script>
import environment from '../environment/base'
import axios from 'axios'

export default {
name:"OrderSeller",
			data(){
				return {
					orders:null,
				}
			},
			mounted(){
				const base = environment['dev']
				const id = localStorage.getItem('id')
				axios.get(`${base._url}/orders-seller/${id}`)
				.then(response =>{
				this.orders = response.data.ordenes
						}).catch(err => console.log(err))					
			},
methods:{
					OrderMethod(){
					console.log('hola')
					}
				}

}
</script>

<style>
.container-orders{
margin-top: 30px;
}

.container-order{

}
.card-orders{
margin:10px;
box-shadow:1px 1px 1px 1px #000;
border:#7c1d1d 1px solid !important;
}
</style>
