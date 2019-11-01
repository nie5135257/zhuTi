<template>
	<div class="top">
		<div>
			<p>
				<slot name="ttl"></slot>
			</p>
			<p class="ttl1">
				<slot name="ttl1"></slot>
			</p>
		</div>
		<div>
			<!--<i> {{ $attrs.txt }} </i>
			<i class="el-icon-arrow-right"></i>-->
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default{
//		porps: ['txt','none']
	}
</script>

<style scoped="scoped" lang="less">
	.top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		margin-top: 0.3rem;
		margin-bottom: 0.15rem;
		span{
			font-size: 0.4rem;
			font-weight: 800;
		}
		.ttl1>span{
			font-size: 0.3rem;
			font-weight: 400;
			color: #606266;
		}
		i{
			width: 0.5rem;
			height: 0.5rem;
			line-height: 0.5rem;
			font-size: 0.36rem;
			font-weight: bold;
			text-align: center;
			color: #F56C6C;
			background-color: #FDE2E2;
			border: 0px solid;
			border-radius: 50%;
			cursor: pointer;
		}
		.one{
			font-size: 0.3rem;
			font-weight: 500;
		}
	}
</style>