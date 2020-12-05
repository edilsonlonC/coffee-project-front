<template>
<div>
<div class="nav-product-seller">
	<router-link to='/home-seller/products'> Productos</router-link>
	<a href="#"> Mis ventas </a>
	<a href="#"> <span> <i class="fas fa fa-cog"></i></span></a>
</div>
<div class="container chart">
<OrderChart v-bind:chartdata="chart.chartdata" v-bind:options="chart.options"/>
</div>
</div>
		
	
</template>

<script>
import OrderChart from '../components/OrderChart'
export default {
	props: ['data'],
	name : "HomeForSeller",
	data(){
		return{
chart:{
chartdata:{
		labels: [1,2,3,4],
						datasets:[
						{
						label: "Data one",
						data: [5,3,2,3]
						}
						]
	},
options:{
scales:{
yAxes:[
			{
ticks:{
beginAtzero:false
			}
			}
]
			}
				}

	}}},
components: {
		OrderChart
	}

}
</script>

<style>
.nav-product-seller{
	height:50px;
	padding-top:10px;
	box-shadow: 1px 1px #000;
}
.nav-product-seller a{
	padding-right: 10px;
	text-decoration:none;
}
.chart{
	
}
</style>
