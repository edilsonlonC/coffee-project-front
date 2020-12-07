<template>
<div><div class="nav-product-seller">
	<a href="#" v-b-toggle.sidebar-no-header> <i class="fa fa-sliders-h"></i> </a>
	<router-link to='/home-seller/products'> Productos</router-link>
	<a href="#"> <span> <i class="fas fa fa-cog"></i></span></a>
</div>
<div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Tecnura</h4>
          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active  @click="showProductsMehod">Products</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Ventas</b-nav-item>
              <b-nav-item href="#link-2" @click="hide"> no e</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>


<div class="container chart" v-if="showProducts">
<ProductSeller/>
</div>

</div>
		
	
</template>

<script>

import ProductSeller from '../components/ProductSeller'
export default {
	props: ['data'],
	name : "HomeForSeller",
	data(){
		return{
		showProducts:true,
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
	ProductSeller
	},
methods:{
					showProductsMehod(){
						this.showProducts = !this.showProducts
					}
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
</style>
