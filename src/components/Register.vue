<template>
	<div id="register">
		<h1> Registro </h1>
		<b-form @submit="onSubmit"  v-if="show">
			<b-form-group 
				id="input-group-1"
				label="Nombre"
				label-for="input-1"
			>
			<b-form-input
				id="input-1"
				v-model="form.name"
				type="text"
				required
				placeholder="Ingresar el nombre"
			>
			</b-form-input>
			</b-form-group>
		<b-form-group 
				id="input-group-2"
				label="Email"
				label-for="input-2"
			>
			<b-form-input
				id="input-2"
				v-model="form.email"
				type="email"
				required
				placeholder="Ingresar el email"
			>
			</b-form-input>
			</b-form-group>
		<b-form-group 
				id="input-group-3"
				label="Contraseña"
				label-for="input-3"
			>
			<b-form-input
				id="input-3"
				v-model="form.password"
				type="password"
				required
				placeholder="Ingresar la contraseña"
			>
			</b-form-input>
			</b-form-group>
			<b-button type="submit" > Registrar </b-button>

		</b-form>
	</div>	
</template>

<script>
import axios from 'axios'
import base from '../environment/base'
export default {

	name:"Register",
	data() {
	return {
		show:true,
			form:{
				name:'',
				email:'',
				password:''
				}
		}
		},
methods:{
					onSubmit(evt){
					evt.preventDefault()
					const config = base['dev']
					axios.post('http://localhost:3000/api/coffee-seller',this.form).then(response => {
					const { token } = response.data
					console.log(config)
					if (token){
							localStorage.setItem('token',token)
							localStorage.setItem('id', response.data.vendedor.id)	
							this.$router.push({name:'HomeSeller',params:{data:response.data.vendedor}})
							
					}

					}).catch(err => console.log(err))

					}
				}



}
</script>

<style>

</style>
