<script>
import { Bar } from 'vue-chartjs'

export default{
	extends: Bar,
						props:['chartdata','options'],
	mounted(){
	console.log('test props hre')
	console.log(this.chartdata)
	console.log(this.options)
	this.renderChart(this.chartdata)
	}
}


</script>
<style>
</style>
