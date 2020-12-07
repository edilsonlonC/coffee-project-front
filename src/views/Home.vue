<template>
  <div class="home">
	<div class="nav-home"> 
	<h3><i class = "fas fa-mug-hot"> </i> Tecnura</h3>	
	</div>
	<div class="fake"></div>
	<div class='row'>
		<div class="col">
			<div class="container container-card"> 


					<b-card
						title="Eres vendedor?"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="vendedor"
						img-top
						class='card'
			
							>
				<div class='containder'>
				<div class='row'>
						<div class="col">
							<b-button href='#' v-on:click= "showRegisterSellerMethod" >
									Registro
							</b-button>
						</div>
						<div class="col">
							<b-button href='#' v-on:click="showLoginSellerMethod">
									Login
							</b-button>
						</div>


				</div>

		</div>
		
		


		</b-card>
		<div v-if="showRegisterSeller" >
		<b-card>
		<Register ></Register>
		</b-card>
		</div>

		<div v-if="showLoginSeller">
			<b-card>

			<LoginSeller/>
			</b-card>
		</div>
	</div>
	</div>
	<div class="col">
	<div class="container container-card"> 


		<b-card
			title="Eres comprador?"
			img-src="https://picsum.photos/600/300/?image=25"
			img-alt="vendedor"
			img-top
			class="card"
			
		>
		<div class='container'>
				<div class='row'>
						<div class="col">
							<b-button href='#' @click="showRegisterBuyerMethod">
									Registro
							</b-button>
						</div>
						<div class="col">
							<b-button href='#' @click="showLoginBuyerMethod">
									Ingresar
							</b-button>
						</div>


				</div>

		</div>
		
		


		</b-card>
		<div v-if="showRegisterBuyer">
			<b-card>
				<RegisterBuyer/>
			</b-card>
		</div>
		<div v-if="showLoginBuyer">
			<b-card>
				<LoginBuyer/>
			</b-card>
		</div>
		</div>

	</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '../components/Register'
import LoginSeller from '../components/LoginSeller'
import RegisterBuyer from '../components/RegisterBuyer.vue'
import LoginBuyer from '../components/LoginBuyer'
export default {
  name: 'Home',
					data(){
						return{
						showRegisterSeller:false,
						showLoginSeller:false,
						showRegisterBuyer:false,
						showLoginBuyer:false
						}
					},
  components: {
	Register,
	LoginSeller,
	RegisterBuyer,
	LoginBuyer
  },
methods:{
showRegisterSellerMethod :function () {
				this.showRegisterSeller = !this.showRegisterSeller
				this.showLoginSeller = false
				this.showRegisterBuyer =false
				this.showLoginBuyer = false
													},
				
showLoginSellerMethod: function(){
				this.showLoginSeller = !this.showLoginSeller
				this.showRegisterSeller = false
				this.showRegisterBuyer = false
				this.showLoginBuyer = false
											},
showRegisterBuyerMethod: function(){
				this.showRegisterBuyer = !this.showRegisterBuyer
				this.showLoginSeller = false
				this.showRegisterSeller =false
				this.showLoginBuyer = false
												},
showLoginBuyerMethod: function(){
				this.showLoginBuyer = !this.showLoginBuyer
				this.showRegisterBuyer = false
				this.showLoginSeller = false
				this.showRegisterSeller =false
							}
											
}
}
</script>
<style>

.home{
	display:block;
	width:100%;
	height : 200vh;
}

.nav-home{
	background:rgba(252,252,255,0.9);
	height:40px;
	width:100%;
	margin:0;
	position:fixed;
	z-index:1;
	padding-top:5px;
	box-shadow: .9px .9px ;
	color:#7c1d1d;

}
.fake{
	height:70px;
}

.card{
	margin-bottom:10px;
	box-shadow:1px 1px 1px 1px  #000;
	margin-left:10px;
	border-radius:90px 80px;
}

.card:hover{

	box-shadow:1px 1px 1px 1px  #7c1d1d;
}





</style>
