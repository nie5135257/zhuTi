<template>
	<el-button :class='btn' type="danger">{{ flag  }}</el-button>
</template>

<script>
	export default {
		props: ['btn','price','music','txt'],
		computed: {
			flag(){
				if(this.txt){
					return this.txt
				}else if(this.price !== '0.0'){
					return '购买'
				}else if(this.music){
					return '彩铃'
				}else{
					return '下载'
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
.btn{
	border: 0 solid;
	font-size: 0.3rem;
	padding: 0.15rem 0.3rem;
	letter-spacing: 0.5em;
	color: #FDE2E2;
	background-color: #ED6060;
}
.btn1{
	border: 0 solid;
	font-size: 0.3rem;
	padding: 0.15rem 0.3rem;
	letter-spacing: 0.5em;
	color: #F56C6C;
	background-color: #FDE2E2;
}
</style>