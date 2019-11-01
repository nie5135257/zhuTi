<template>
	<div id="detail">
		<div v-if='$route.query.http === "zhuTi"'>
			<mt-header fixed :title="zhuTiOne.ttl">
				<div @click="$router.back(-1)" slot="left">
	    			<mt-button icon="back"></mt-button>
	  			</div>
			</mt-header>
	
			<div class="imgOne">
				<div class="item" v-for='(i,j) in zhuTiOne.src' :key='j'>
					<img :src="i" alt="" />
				</div>
			</div>
			<div class="label">
					<my-btn-price btn='btn1' :txt='i' v-for='(i,j) in zhuTiOne.label' :key='j'>
					</my-btn-price>
			</div>
			
			<my-item-top class='discuss'>
				<span slot='ttl'>资源简介</span>
				<span slot='ttl1'>*任意滑动解锁。。。</span>
				<i slot='right' class="one"> 更多 </i>
			</my-item-top>
			
			<my-item-top class='discuss'>
				<span slot='ttl'>用户评论</span>
				<i slot='right' class="one"> {{zhuTiOne.discuss.length+"条"}} </i>
			</my-item-top>
			
			<my-item-top>
				<span slot='ttl'>大家还喜欢</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='zhuTiTwo' btn='btn'></my-zhuti>
			
			<div class="bottom">
				<el-button  icon="el-icon-share" circle></el-button>
				<el-button  type="danger" round>试用</el-button>
				<el-button  type="danger" round>{{zhuTiOne.price}}可币</el-button>
				<el-button @click='star'  :icon="flag ? 'el-icon-star-on' : 'el-icon-star-off'" circle></el-button>
			</div>
		</div>
		
		<div v-else>
			<mt-header fixed :title="fontOne.ttl">
				<div @click="$router.back(-1)" slot="left">
	    			<mt-button icon="back"></mt-button>
	  			</div>
			</mt-header>
	
			<div class="imgTwo">
				<div class="item" >
					<img :src="fontOne.src[1]" alt="" />
				</div>
			</div>
			<div class="label">
					<my-btn-price btn='btn1' :txt='i' v-for='(i,j) in fontOne.label' :key='j'>
					</my-btn-price>
			</div>
			
			<my-item-top class='discuss'>
				<span slot='ttl'>资源简介</span>
				<span slot='ttl1'>*任意滑动解锁。。。</span>
				<i slot='right' class="one"> 更多 </i>
			</my-item-top>
			
			<my-item-top class='discuss'>
				<span slot='ttl'>用户评论</span>
				<i slot='right' class="one"> {{fontOne.discuss.length+"条"}} </i>
			</my-item-top>
			
			<my-item-top>
				<span slot='ttl'>大家还喜欢</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='fontTwo' btn='btn' src='true'></my-zhuti>
			
			<div class="bottom">
				<el-button  icon="el-icon-share" circle></el-button>
				<el-button  type="danger" round>试用</el-button>
				<el-button  type="danger" round>{{fontOne.price}}</el-button>
				<el-button @click='star'  :icon="flag ? 'el-icon-star-on' : 'el-icon-star-off'" circle></el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				zhuTiOne: {},
				zhuTiTwo: {},
				fontOne: {},
				fontTwo: {},
				flag: false
			}
		},
		 created() {
			this.get()
		},
		computed: {
			_id(){
				return this.$route.query._id
			}
		},
		methods: {
			star(){
				if(this.flag){
					this.flag = !this.flag
					this.$toast({
					  message: '取消收藏',
					  position: 'bottom',
					  duration: 1500
					})
				}else{
					this.flag = !this.flag
					this.$toast({
					  message: '已收藏',
					  position: 'bottom',
					  duration: 1500
					})
				}
				
			},
			async get(){
				if(this.$route.query.http === 'zhuTi'){
					this.$http.get('/zhuTiOne',{
						params: {
							_id: this.$route.query._id
						}
					}).then(res=>{
						if(res){
							this.zhuTiOne = res.data
						}
					})
					
					let z_label2 = await this.zhuTiOne.label
					this.zhuTiTwo = await this.getZhuTi(3,1,{label: z_label2})
				}else{
					this.$http.get('/fontOne',{
						params: {
							_id: this.$route.query._id
						}
					}).then(res=>{
						if(res){
							this.fontOne = res.data
						}
					})
					
					let f_label1 = await this.fontOne.label
					this.fontTwo = await this.getFont(3,1,{label: f_label1})
				}
			}
		},
		watch: {
		    _id: 'get'
		}
	}
</script>

<style scoped="scoped" lang="less">
	#detail{
		
		overflow-x: hidden;
		>div{
			margin-top: 0.2rem;
			padding: 0.2rem;
		}
		.mint-header{
			background-color: #fff;
			color: #000;
		}
		.mint-header-title{
			font-weight: bold;
		}
		.imgOne{
			margin-top: 1rem;
			width: 180%;
			display: flex;
			.item{
				width: 45%;
				margin-right: 0.1rem;
				img{
					width: 100%;
					
				}
			}
		}
		.discuss{
			margin: 1rem 0;
		}
		.imgTwo{
			margin-top: 1rem;
			width: 100%;
			.item{
				width: 45%;
				margin: 0.1rem auto;
				img{
					width: 100%;
					
				}
			}
		}
		.bottom{
			width: 100%;
			bottom: 1rem;
			padding: 0 0.5rem;
			position: fixed;
			display: flex;
			justify-content: space-around;
			.is-circle{
				color: #E45151;
			}
			.is-round{
				background-color: #ED6060;
				width: 2.5rem;
			}
		}
	}
</style>