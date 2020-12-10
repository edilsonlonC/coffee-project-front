<template>
<div id="regiter-buyer">
	<h1> Registro </h1>
	<b-form @submit="onSubmit">

		<b-form-group
		id="name-group-1"
		label="Nombre"
		label-for="name"

		>
		<b-form-input

		id="name"
		v-model="form.name"
		type="text"
		required
		placeholder="Ingresar el nombre"
		>
	</b-form-input>
	</b-form-group>	
	<b-form-group
		id="email-group-2"
		label="Email"
		label-for="email"

		>
		<b-form-input

		id="email"
		v-model="form.email"
		type="text"
		required
		placeholder="Ingresar el Email"
		>
	</b-form-input>
	</b-form-group>
	<b-form-group
		id="password-group-1"
		label="Contraseña"
		label-for="password"

		>
		<b-form-input

		id="password"
		v-model="form.password"
		type="password"
		required
		placeholder="Ingresar la contraseña"
		>
	</b-form-input>
	</b-form-group>	
	<b-button type="submit">Registrar</b-button>
	</b-form>



</div>

</template>

<script>
import environment from '../environment/base'
import axios from 'axios'
export default {
name:"RegisterBuyer",
			data(){

				return{
form:{
name:'',
password:'',
email:''
		}
				}

			},
methods:{
					onSubmit(evt){
						evt.preventDefault()
						const base = environment['dev']
						axios.post(`${base._url}/buyer`,this.form).then(response =>{
									const {id} = response.data.comprador
									localStorage.setItem('id', id)

									this.$router.push({path:'home-buyer'})
								})
					}
				}
}
</script>

<style>

</style>
