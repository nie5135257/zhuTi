<template>
	<div ref='drag' class="items" :class="[ $attrs.inline ? nowrap : '']" @mousedown="drag">
		<div class="item" v-for='(i,j) in $attrs.obj' :key='j'>
			<div class="one">
				<img :src="i.src[0]" alt="" />
				<my-btn-price :btn='$attrs.btn' :price='i.price'></my-btn-price>
			</div>
			<div class="two">
				<div class="ttl">{{ i.ttl }}</div>
				<my-price :price='i.price'></my-price>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		porps: ['obj', 'btn', 'inline'],
		data() {
			return {
				nowrap: 'nowrap'
			}
		},
		methods: {
			drag(e) {
				console.log(this.$refs.drag)
				let img = this.$refs.drag
				let imgX = e.clientX - img.offsetLeft
				let imgY = e.clientY - img.offsetTop
				console.log(imgX,imgY)
				
				document.onmousemove = function(ev){
					let x = ev.clientX - imgX
					let y = ev.clientY - imgY
					img.style.left = x + "px"
					img.style.top =  img.offsetTop
					
				}
				document.onmouseup = function () {
					document.onmousemove = null
					document.onmouseup = null
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	/*主题精选*/
	
	.nowrap {
		flex-wrap: nowrap !important;
	}
	
	.items {
		position: relative;
		width: 100%;
		display: flex;
		padding: 0.1rem;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow-x: hidden;
		.item {
			width: 33.333333%;
			padding: 0.04rem;
			.one {
				position: relative;
				img {
					width: 100%;
					height: 5.3333rem;
					cursor: pointer;
					border-radius: 0.1rem;
				}
				.el-button {
					position: absolute;
					top: 80%;
					left: 50%;
					transform: translateX(-50%);
					z-index: 0.5;
				}
			}
			.two {
				.ttl {
					width: 3.1rem;
					font-size: 0.36rem;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					font-weight: bold;
				}
			}
		}
	}
</style>