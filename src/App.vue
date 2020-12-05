<template>
  <div id="app">

<!--    <div id="nav" class="navbar  navbar-expand-sm bg-light navbar-light">
			<a href="#" class="navbar-brand logo"> Logo </a>
      <router-link  class="navbar-brand item-navbar" to="/">
				<span v-on:click = "putIcon"><i  v-if="homeFlag" class = "fas fa-mug-hot"> </i> Home </span>

			</router-link> 
      <router-link class="navbar-brand item-navbar" to="/about">
				<span v-on:click = "putIcon"><i v-if="aboutFlag" class = "fas fa-mug-hot"> </i> About </span>
			</router-link>
		</div>
		
    <router-view/> -->
		<router-view/>
  </div>
</template>
<script>
export default{
	data() {
	return {
			counter:0,
			homeFlag: true,
			aboutFlag: false,
			

		}
	},
methods:{
putIcon : function(event){
						let text  = event.srcElement.innerText.trim()
							switch(text){
						case	'Home': 
									this.homeFlag = true
									this.aboutFlag = false
									break
						case	'About':
									this.homeFlag = false
									this.aboutFlag = true
									break
						}
													}
			}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*#nav {
	box-shadow : 1px 1.2px #000;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #7c1d1d;

}


.logo{
margin-right: 5em;
}*/



</style>
