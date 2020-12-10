<template>
  <div class="home">
	<div class="nav-home"> 
	<h3><i class = "fas fa-mug-hot"> </i> Tecnura</h3>	
	</div>
	<div class="fake"></div>
	<div class='row'>
		<div class="col">
			<div class="container container-card container-card-login"> 


					<b-card
						:img-src="url_img_seller"
						img-alt="vendedor"
						img-right
						class='card'
			
							>
				<div class="title-login"><h3> Vender </h3> </div>
				<div class='container'>
				<div class='row'>
						<div class="buttons-login">
							<b-button href='#' class="button" variant="outline-primary"  v-on:click= "showRegisterSellerMethod" >
									Registrar
							</b-button>
						</div>
						<div >
							<b-button href='#' class="button"  variant="outline-primary" v-on:click="showLoginSellerMethod">
									Ingresar
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
			:img-src="url_img_buyer"
			img-alt="vendedor"
			img-left
			class="card"
			
		>

<div class="title-login"><h3> Comprar </h3> </div>
		<div class='container'>
				<div class='row'>

						<div class="buttons-login" >
							<b-button variant="outline-primary" class="button" href='#' @click="showRegisterBuyerMethod">
									Registrar
							</b-button>
						</div>
						<div >
							<b-button variant="outline-primary"  class="button" href='#' @click="showLoginBuyerMethod">
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
						showLoginBuyer:false,
						url_img_seller: "http://localhost:3000/uploads/loginvendedor.jpeg",
						url_img_buyer: "http://localhost:3000/uploads/comprador.jpeg"
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
<style lang="css" >
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');

.home{
	display:block;
	width:100%;
	height : 200vh;
	
}

.nav-home{
	background:rgba(252,252,255,0.9);
	height:50px;
	width:100%;
	margin:0;
	position:fixed;
	z-index:1;
	padding-top:5px;
	box-shadow: .9px .9px #BEBEBE;
	color:#7c1d1d;


}
.fake{
	height:150px;
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

.button {
margin-top:8em;
margin-left:15px;
border: 1px  solid #7c1d1d !important;
color:#7c1d1d !important;

}

.button:hover{

border: 1px  solid #7c1d1d !important;
background-color:#7c1d1d !important;
color:#ffff !important;

}

.container-card-login img{
}
.title-login{

color: #7c1d1d;
text-align:center;
font-family: "Nerko One", cursive;

}
.title-login h3{

font-size:4em;

}


</style>
