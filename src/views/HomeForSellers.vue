<template>
<div>
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
              <b-nav-item   @click="showProductsMehod">Productos</b-nav-item>
              <b-nav-item  @click="showSalesMethod">Ventas</b-nav-item>
              <b-nav-item  @click="CloseSesion">Cerrar Sesión</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary button-nav" block @click="hide">Cerrar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>


<div class="container chart" v-if="showProducts">
<ProductSeller/>
</div>
<div class="container" v-if="showSales">
<OrderSeller/>
</div>

</div>
		
	
</template>

<script>

import ProductSeller from '../components/ProductSeller'
import OrderSeller from '../components/OrderSeller'



export default {
	props: ['data'],
	name : "HomeForSeller",
	data(){
		return{
		showProducts:true,
		showSales:false,
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
	ProductSeller,
	OrderSeller
	},
methods:{
					showProductsMehod(){
						this.showProducts = true
						this.showSales = false
					},
					showSalesMethod(){
					this.showSales = true
					this.showProducts = false
					},
					CloseSesion(){
					localStorage.removeItem('token')
					localStorage.removeItem('id')
					this.$router.push({ path:'/' })
					}
				}

}
</script>

<style>
.nav-product-seller{
	height:50px;
	padding-top:10px;
	box-shadow: 1px 1px #7c1d1d;
}
.nav-product-seller a{


	color:#7c1d1d;
	font-size:1.5em;
}

.nav-product-seller a:hover{


	color:#7c1d1d;
	font-size:1.5em;
	text-decoration:none;
}
.chart{
	
}

 #wrapper {
    overflow-x: hidden;
 }
#sidebar-wrapper {
min-height: 100vh;
margin-left: -15rem;
-webkit-transition: margin .25s ease-out;
-moz-transition: margin .25s ease-out;
-o-transition: margin .25s ease-out;
transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
padding: 0.875rem 1.25rem;
font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
width: 15rem;
}

#page-content-wrapper {
min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
margin-left: 0;
}

@media (min-width: 768px) {
#sidebar-wrapper {
	margin-left: 0;
}

#page-content-wrapper {
	min-width: 0;
	width: 100%;
}

#wrapper.toggled #sidebar-wrapper {
	margin-left: -15rem;
}
}

.menu-icon{
	position:relative;
	float:left;
	margin-left:30px;

}

.config-icon{
margin-left:auto;
margin-right:auto;
}
.logo-item{
position:relative;
float:right;
margin-right: 50px;

}
.slide-seller {
margin-top:300px;
color: #7c1d1d !important;
}
.slide-seller a{
color: #7c1d1d !important;
}

.button-nav{
background-color :#7c1d1d !important; 
border:none !important;


}

#sidebar-no-header{
background-color: rgba(250,250,250,0.6) !important;
}
</style>
