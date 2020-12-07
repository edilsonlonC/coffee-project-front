<template>
	<div>
	<h1> Login Compradores </h1>
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
import environment from '../environment/base'
import axios from 'axios'

export default {
	name:"LoginBuyer",
		data(){
		return{
		form:{
			email:'',
			password:''

				},
		show:true
					}
				},
methods:{
					onSubmit(evt){
					evt.preventDefault()
					const base = environment['dev']
					axios.post(`${base._url}/buyer/login/`,this.form)
					.then( response =>{
							const { token } = response.data
							const buyer = response.data.comprador
							if (token){
							localStorage.setItem('id',buyer.id)	
							this.$router.push({ path:"home-buyer" })
							} 
							else return console.log('No authorized')


							}).catch(() => console.log('unauthorized'))
							
					}
				}

}
</script>

<style>

</style>
