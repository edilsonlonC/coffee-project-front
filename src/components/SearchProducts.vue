<template>
	
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
