<template>
<div class="container">
<b-form id="formProducts" @submit="searchProducts">
<b-form-group
	id="search-group"
	label="Buscar"
	label-for="search"
>
<b-form-input 
	id="search"
	v-model="form.fieldSearch"
	required
	placeholder="Buscar"
	type="text"
>
</b-form-input>

</b-form-group>
<b-button type="submit"><span><i class="fa fa-search"></i></span></b-button>
</b-form>
</div>	
</template>

<script>
export default {
name:"SearchProducts",
	data(){
		return {
form:{
	fieldSearch:''
		}
		}
			},
methods:{
	searchProducts(evt){
		evt.preventDefault()
		console.log("searching", this.form)
		// TODO: search in api for description or name  prefer elastic search in server
					
					}
				}

}
</script>

<style>

</style>
