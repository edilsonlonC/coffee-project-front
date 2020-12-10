<template>

<div id="productSeller">
<div class = "nav1"> 
</div>

<div class="container">

<b-modal ref="modal-upload-image" :hide-footer="true">
	<b-form>
		<b-form-group
		label="imagen"
		label-for='image'
		>
<b-form-file
v-model="file"
placeholder="Seleccionar el archivo"
>
	</b-form-file>
	</b-form-group>
	<b-button @click="uploadImage">Subir</b-button>
</b-form>


</b-modal>
<b-modal ref="modal-update" :hide-footer="true" title="Actualizar">

<b-form>

<b-form-group
label="Nombre"
label-for="name"
>
<b-form-input
id="name"
type="text"
v-model="form.name"
>
</b-form-input>

</b-form-group>

<b-form-group
label="Descripción"
label-for="description"
>
<b-form-input
id="description"
type="text"
v-model="form.description"
>
</b-form-input>

</b-form-group>

<b-form-group
label="Precio"
label-for="price"
>
<b-form-input
id="price"
type="text"
v-model="form.price"
>
</b-form-input>

</b-form-group>
<b-button type="submit" @click="updateProduct">Actualizar</b-button>
</b-form>

</b-modal>


</div>
<div class="container">

<!-- form for search query -->

<b-form > 

<b-form-group

class='form-search'
>

<a href="#" class="btn btn-success btn-create" @click="showModal">  <span> <i class="fa fa-plus"></i> Crear Productos </span> </a>
<b-form-input
id="search"
type="text"
v-model="query"
></b-form-input>

</b-form-group>


</b-form>

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
	label="Descripción"
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

<div class="container container-products" >

<b-card  class="card-products-seller"
v-for="product in products" 
:key="product.id"
:img-src="product.img ? 'http://localhost:3000/uploads/' + product.img : 'http://localhost:3000/uploads/default.png'"
img-left

>

<div class="container"> 

<span>  <strong>Producto</strong> : {{ product.name  }}</span><br>
<span> <strong>Descripcion</strong> : {{ product.description }} </span><br>
<span> <strong>Precio</strong> : {{ product.price }} </span>
<div class="container container-buttons">

<button class="btn btn-dark" @click="showModalImage(product.id)">Subir imagen</button>
<button class="btn btn-danger" @click="deleteProduct(product.id)"> Eliminar </button>

<button 
class="btn btn-success" 
@click="showModalUpdate(product.name,product.description,product.id,product.price)"> 
Actualizar </button>

</div>
</div>



</b-card>


</div>
<!---<div class="container">
<b-table striped hover :items="products" :fields="fields">
</b-table>
</div> -->


</div>	
</template>

<script>
import axios from 'axios'
import environment from '../environment/base.js'
export default {
	name:'ProductSeller',
	components:{
				},
	mounted(){
		this.getProducts()
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
				query:null,
				id_update : null,
				file: null,
				id_for_image:null
				
				}},
watch:{
query: async function(value){
			const base = environment['dev']
			const id = localStorage.getItem('id')
			const result = await  axios.get(`${base._url}/coffee-seller/product/${id}?search=${value}`)
			.catch(err => console.log(err))
			console.log(result)
			this.products = result.data.productos
			}
			},
methods:{
					showModal(evt){
					console.log(evt)
					this.form.name=""
					this.form.description=""
					this.$refs['modalProduct'].show()
					},
					onSubmitProduct(){
					this.$refs["modalProduct"].hide()
					const {name, description, price} = this.form
					const id = localStorage.getItem('id')
					console.log(id)
					const data = {
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
						const id = localStorage.getItem('id')
						axios.get(`${environment['dev']._url}/coffee-seller/product/${id}`).then(response=>{
						this.products = response.data.productos
								})
					},
					deleteProduct(id){
					const base = environment['dev']
						axios.delete(`${base._url}/product/${id}`).then(response => {
						console.log(response)
						this.getProducts()
								})
					},
					showModalUpdate(name,description,id,price){
					this.form.name=name
					this.form.description = description 
					this.id_update=id
					this.form.price = price
					this.$refs["modal-update"].show()
					},
					updateProduct(){
					this.$refs['modal-update'].hide()
					const base = environment['dev']
						const id = this.id_update
						axios.put(`${base._url}/product/${id}`,this.form).then(response => {
						console.log(response)
						this.getProducts()
						})
					
					},
					showModalImage(id_file){
					this.id_for_image = id_file
					this.$refs['modal-upload-image'].show()
					},
					uploadImage(){
						if(!this.file){
						return
						}
					this.$refs['modal-upload-image'].hide()

					const base = environment['dev']
					const formData = new FormData()
					formData.append('product',this.file)
					axios.post(`${base._url}/product/upload/${this.id_for_image}`,formData).then(response => {
						console.log(response)
						this.getProducts()
							})
					.catch(err => console.log(err))
					}
					
				},
				
}

</script>

<style>


.card-products-seller img{

width:200px;
height:200px;
border-radius:99px;
box-shadow:2px 2px #000;
margin-top:15px;



}





.container-buttons{
padding-top:20px;
}

.container-buttons button{

margin: 10px;
}

#productSeller{
margin-top: 100px;
}

.form-search{
	margin:20px;

}
.btn-create{
width: 100%;
margin-bottom:20px;
}



</style>
