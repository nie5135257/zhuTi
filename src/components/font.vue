<template>
	<div class="items">
		<div class="item" v-for="(i,j) in $attrs.obj" :key='j' :style="styleObj[j%4]">
			<div class="box" @click='goto(i._id)'>
				<div><img :src="i.src[0]" alt="" /></div>
				<div><my-price :price='i.price'></my-price></div>
				<div><my-btn-price :btn='$attrs.btn' :price='i.price'></my-btn-price></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		porps: ['obj','btn'],
		data(){
			return{
				styleObj: [
					{background: 'linear-gradient(#D9ECFF, #fff)'},
					{background: 'linear-gradient(#E1F3D8, #fff)'},
					{background: 'linear-gradient(#FAECD8, #fff)'},
					{background: 'linear-gradient(#FDE2E2, #fff)'}
				]
			}
		},
		methods: {
			goto(_id){
				this.$router.push({path: '/detail', query: {_id, http: 'font'}});
				
			}
		},
		activated: function() {
		 	this.goto()
		}
	}
</script>

<style scoped="scoped" lang="less">
.items{
	width: 100%;
	display:flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.item{
		width: 47.5%;
		padding: 0.2rem;
		margin: 0.5% 1%;
		/*background: linear-gradient(#FFF7F0, #fff);*/
		.box{
			background-color: #fff;
			width: 100%;
			text-align: center;
			padding: 0.2rem;
			align-items: center;
			div{
				padding: 0.08rem;
				img{
					display: block;
					width: 100%;
					height: 0.6rem;
				}
			}
		}
	}
}
</style>