<template>
<div>
<b-form  @submit="onSubmitProduct" >
	<b-form-group
		
		id="input-group"
		label="Nombre del Producto"
		label-for="input-1"
	>
	<b-form-input
		id="input-1"
		v-model="form.name"
		type="text"
		required
		placeholder="Ingrese el nombre del producto"

	>
	</b-form-input>
	</b-form-group>
	<b-button type="submit"> Registrar </b-button>
	</b-form>



</div>	
</template>

<script>
export default{
	name:"ProductRegister",
	data(){
		return {
form:{
name: '',
			}
		}

			},
methods:{
					onSubmitProduct(evt){
						console.log('here')
						evt.preventDefault()
						console.log(this.form)

					}
				}
}

</script>


