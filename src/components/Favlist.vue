<template>
	<div>
		<div id="aaa">
			<div>11111</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	console.log(1)
	export default {
		data () {
			return {
				msg: 'Hello World!'
			}
		}
	}
</script>

<style>
	html{
		background: #e191a4;
	}
</style>
