<template>

<div id="productSeller">
<div class = "nav1"> 
<a href="#" @click="showModal">Crear Productos</a>
</div>
<template>
<div>
<b-modal id="modal-product" ref="modalProduct" :hide-footer="true">
<h2> Agregar Producto </h2>
<form ref="form">
	<b-form-group
	label="Nombre"
	label-for="Nombre-input"
	>
	<b-form-input
	id="Nombre-input"
	v-model="form.name"
	required
	>
		
	</b-form-input>
	</b-form-group>
	<b-form-group
	label="Descripci?n"
	label-for="description-input"
	>
	<b-form-input
	id="description-input"
	v-model="form.description"
	required
	>
		
	</b-form-input>
	</b-form-group>

	<b-form-group
	label="Precio"
	label-for="price-input"
	>
	<b-form-input
	id="price-input"
	v-model="form.price"
	required
	>
		
	</b-form-input>
	</b-form-group>
	<b-button @click="onSubmitProduct"> Agregar </b-button>
</form>
</b-modal>
</div>

</template>


<div class="container">
<b-table striped hover :items="products" :fields="fields">
</b-table>
</div>


</div>	
</template>

<script>
import axios from 'axios'
import environment from '../environment/base.js'
export default {
	name:'ProductSeller',
	components:{
				},
	data(){
		return {
				fields: ['name', 'description', 'price'],
				products:[],
				form:{
				name:'',
				description:'',
				price:''
				},
				
				}},
methods:{
					showModal(evt){
					console.log(evt)
					this.$refs['modalProduct'].show()
					},
					onSubmitProduct(){
					this.$refs["modalProduct"].hide()
					const {name, description, price} = this.form
					const id = localStorage.getItem('id')
					console.log(id)
					const data ={
						name,
						description,
						price,
						SellerId:id
						
					}
					axios.post(`${environment['dev']._url}/product`,data).then(response =>{
					this.form.name=''
					this.form.description=''
					this.form.price=''
					console.log(response)
					this.getProducts()
					}).catch(err => console.log(err))
					},
					getProducts(){
						axios.get(`${environment['dev']._url}/products`).then(response=>{
						this.products = response.data.productos
								})
					}
				},
				
}

</script>

<style>

</style>
