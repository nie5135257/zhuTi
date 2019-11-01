<template>
	<div class="items" :class="[ $attrs.inline ? nowrap : '']">
		<div class="item"  v-for='(i,j) in $attrs.obj' :key='j'>
			<div class="one" @click='goto(i._id)'>
				<img :src="$attrs.src ? i.src[1] : i.src[0]" alt="" />
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
	export default{
		porps: ['obj','btn','inline','src'],
		data(){
			return{
				nowrap: 'nowrap'
			}
		},
		methods: {
			goto(_id){
				if(this.$attrs.src){
					this.$router.push({path: '/detail', query: {_id, http: 'font'}}); 
				}else{
					this.$router.push({path: '/detail', query: {_id, http: 'zhuTi'}}); 
				}
				
			}
		},
		activated: function() {
		 	this.goto()
		}
	}
</script>

<style scoped="scoped" lang="less">
	/*主题精选*/
	.nowrap{
		flex-wrap: nowrap !important;
	}
	.items{
		width: 100%;
		display: flex;
		padding: 0.1rem;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow-x: hidden;
		.item{
			width: 33.333333%;
			padding: 0.04rem;
			.one{
				position: relative;
				img{
					width: 100%;
					height: 5.3333rem;
					cursor: pointer;
					border-radius: 0.1rem;
				}
				.el-button{
					position: absolute;
					top: 80%;
					left: 50%;
					transform: translateX(-50%);
					z-index: 0.5;
				}
			}
			.two{
				.ttl{
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