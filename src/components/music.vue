<template>
	<div>
		<div class="item" v-for="(i,j) in $attrs.obj" :key='j'>
			<div class="one">
				<p>
					<span>{{ i.ttl }}</span>
				</p>
				<p class="ttl1">{{ i.ttl1 }}</p>
			</div>
			<div>
				<my-btn-price btn='btn1' txt='彩铃'></my-btn-price>
				<my-btn-price btn='btn1'></my-btn-price>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		porps: ['obj']
	}
</script>

<style scoped="scoped" lang="less">
	.item{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		margin-top: 0.3rem;
		.one{
			width: 60%;
			p{
				width: 100%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				span{
					font-size: 0.4rem;
					font-weight: 500;
				}
			}
			.ttl1{
				width: 100%;
				font-size: 0.3rem;
				overflow: hidden;
				text-overflow: ellipsis;
				font-weight: 400;
				color: #909399;
			}
		}
		/*i{
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
		}*/
	}
</style>