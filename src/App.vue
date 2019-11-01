<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

*{
	/*font-size: 0.48rem;*/
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,body,#app{
	color: #333;
	background-color: #fff;
	height: 100%;
}
.btn{
		border: 0 solid;
		font-size: 0.24rem;
		padding: 0.1rem 0.2rem;
		letter-spacing: 0.5em;
		color: #FDE2E2;
		background-color: #ED6060;
}
.btn1{
	border: 0 solid;
	font-size: 0.24rem;
	padding: 0.1rem 0.2rem;
	letter-spacing: 0.5em;
	color: #F56C6C;
	background-color: #FDE2E2;
}


</style>
