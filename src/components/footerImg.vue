<template>
	<div class="fontfooter">
		<slot name='img'></slot>
		<slot name='img1'></slot>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.fontfooter{
		display: flex;
		width: 100%;
		img{
			flex: 50%;
			margin: 0.1rem;
			border-radius: 2.2%;
			max-height: 4rem;
		}
	}
</style>