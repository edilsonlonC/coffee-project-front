<template>
	<div>
	<h1> Login vendedores </h1>
		<b-form @submit="onSubmit"  v-if="show">
			<b-form-group 
				id="input-group-1"
				label="email"
				label-for="input-1"
			>
			<b-form-input
				id="input-1"
				v-model="form.email"
				type="email"
				required
				placeholder="Ingresar el email"
			>
			</b-form-input>
			</b-form-group>
		
		<b-form-group 
				id="input-group-2"
				label="Contraseña"
				label-for="input-2"
			>
			<b-form-input
				id="input-2"
				v-model="form.password"
				type="password"
				required
				placeholder="Ingresar la contraseña"
			>
			</b-form-input>
			</b-form-group>
			<b-button type="submit" > Login </b-button>

		</b-form>

	</div>	
</template>

<script>
export default {
	name:"LoginSeller",
		data(){
		return{
		form:{
			email:'',
			password:''

				},
		show:true
					}
				}

}
</script>

<style>

</style>
