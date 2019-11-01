<template>
	<div class="price">{{ $attrs.price !== '0.0' ? $attrs.price + '可币' : '免费' }}</div>
</template>

<script>
	export default {
		porps: ['price']
	}
</script>

<style scoped="scoped" lang='less'>
	.price{
		font-size: 0.3rem;
		color: #909399;
	}
</style>