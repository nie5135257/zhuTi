<template>
	<div id="index">
		<img src="../assets/logo.png" alt="" />
		<img src="../assets/timg.jpg" alt="" />
	</div>
</template>

<script>
	export default{
		created(){
			setTimeout(()=>{
				this.$router.push('/home')
			},3000)
		}
	}
</script>

<style lang="less">
	#index{
		height: 100%;
		background-color: #fff;
		img{
			width: 100%;
		}
	}
</style>